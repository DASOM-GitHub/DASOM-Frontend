import React, { useState, useEffect } from 'react';
import './MidPassed.css';
import dayjs from 'dayjs';
import { gapi } from 'gapi-script';

const MidPassed = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [studentId, setStudentId] = useState('');

    useEffect(() => {
        function start() {
            gapi.client.init({
                apiKey: 'AIzaSyCrU1CatIr-2Kwd38lWc8_vW3rKdPr0bRk', // API 키
                clientId: '669170885014-knssr9jgvfn4rqb28qmbjaei9cn8k4c2.apps.googleusercontent.com', // 클라이언트 ID
                scope: 'https://www.googleapis.com/auth/calendar',
            }).then(() => {
                gapi.auth2.getAuthInstance().isSignedIn.listen(setIsAuthenticated);
                setIsAuthenticated(gapi.auth2.getAuthInstance().isSignedIn.get());
                return gapi.client.load('calendar', 'v3'); // Google Calendar API 로드
            }).then(() => {
                console.log('Google Calendar API loaded');
            }).catch((error) => {
                console.error('Error loading Google Calendar API', error);
            });
        }
        gapi.load('client:auth2', start);
    }, []);

    const handleAuthClick = () => {
        gapi.auth2.getAuthInstance().signIn();
    };

    const handleSignOutClick = () => {
        gapi.auth2.getAuthInstance().signOut();
    };

    const handleSubmit = async () => {
        if (!isAuthenticated) {
            alert('구글 로그인이 필요합니다.');
            return;
        }

        const confirmation = window.confirm(`예약 확인:\n학번: ${studentId}\n날짜: ${selectedDate}\n시간: ${selectedTime}\n\n예약을 진행하시겠습니까?`);

        if (!confirmation) { //취소 눌렀을 때
            alert("예약을 취소하였습니다. 다시 예약해주세요.")
            return;
        }
    
        if (!gapi.client.calendar || !gapi.client.calendar.events) {
            console.error('Google Calendar API is not loaded');
            return;
        }

        const event = {
            summary: `${studentId}`,
            start: {
                dateTime: new Date(`${selectedDate}T${selectedTime}:00`),
                timeZone: 'Asia/Seoul',
            },
            end: {
                dateTime: new Date(new Date(`${selectedDate}T${selectedTime}:00`).getTime() + 20 * 60000), // 20분 예약
                timeZone: 'Asia/Seoul',
            },
            description: '면접 예약',
        };

        try {
            await gapi.client.calendar.events.insert({
                calendarId: '80fbcb06f918240f8cbe80a113b5a65bc220bdde1d80d2410ede789fbb696046@group.calendar.google.com',
                resource: event,
            });
            alert(`예약 완료: ${selectedDate} ${selectedTime}`);
        } catch (error) {
            console.error('Error creating event:', error);
            alert('예약에 실패했습니다.');
        }
    };

    useEffect(() => {
        setStartDate(dayjs("2024-09-03 00:00:00").format('YYYY-MM-DD'));
        setEndDate(dayjs("2024-09-06 00:00:00").format('YYYY-MM-DD'));
    }, []);

    useEffect(() => {
        if (selectedDate) {
            generateTimeSlots(selectedDate);
        }
    }, [selectedDate]);

    const generateDateRange = (start, end) => {
        const dates = [];
        let currentDate = dayjs(start);

        while (currentDate.isBefore(dayjs(end)) || currentDate.isSame(dayjs(end), 'day')) {
            dates.push(currentDate.format('YYYY-MM-DD'));
            currentDate = currentDate.add(1, 'day');
        }

        return dates;
    };

    const fetchExistingEvents = async (date) => {
        try {
            const response = await gapi.client.calendar.events.list({
                calendarId: '80fbcb06f918240f8cbe80a113b5a65bc220bdde1d80d2410ede789fbb696046@group.calendar.google.com',
                timeMin: new Date(`${date}T00:00:00`).toISOString(),
                timeMax: new Date(`${date}T23:59:59`).toISOString(),
                singleEvents: true,
                orderBy: 'startTime',
            });
            return response.result.items;
        } catch (error) {
            console.error('Error fetching events:', error);
            return [];
        }
    };

    const generateTimeSlots = (date) => {
        const slots = [];
        let startTime = new Date(`${date}T17:00:00`);
        const endTime = new Date(`${date}T20:00:00`);
    
        while (startTime < endTime) {
            slots.push(startTime.toTimeString().substring(0, 5));
            startTime = new Date(startTime.getTime() + 20 * 60000);
        }
        console.log('Generated Time Slots:', slots);
    
        fetchExistingEvents(date).then(events => {
            const occupiedSlots = events.flatMap(event => {
                const eventStart = dayjs(event.start.dateTime).format('HH:mm');
                const eventEnd = dayjs(event.end.dateTime).format('HH:mm');
                const range = [];
                let time = eventStart;
    
                while (time < eventEnd) {
                    range.push(time);
                    time = dayjs(time, 'HH:mm').add(20, 'minute').format('HH:mm');
                }
                return range;
            });
            console.log('Generated Time Slots:', slots);
            
            setAvailableTimeSlots(slots.filter(slot => !occupiedSlots.includes(slot)));
        });
    };


    return (
        <div className='midpassed'>
            <div className='midpassed-title'>축하드립니다</div>
            <div className='midpassed-texts'>
                <p>DASOM 34기 모집에서 <span>1차 합격</span> 하셨습니다</p>
                <p>아래에서 면접 가능한 날짜와 시간을 골라 예약해주세요</p>
            </div>
            <div className='midpassed-reservationBox'>
                <div className='midpassed-reservation-info'>
                    <p>면접 예약을 위해서 <span>Google 로그인</span>이 필요합니다.</p>
                    <p>로그아웃 되어있는 경우 로그인 후 예약해주세요.</p>
                    {!isAuthenticated ? (
                        <>
                            <span className='midpassed-login-status'>* 현재 로그아웃 상태입니다.</span>
                            <button className='' onClick={handleAuthClick}>Google 로그인</button>
                        </>
                    ) : (
                        <>
                            <span className='midpassed-login-status'>* 현재 로그인 상태입니다.</span>
                            <button onClick={handleSignOutClick}>Google 로그아웃</button>
                        </>
                    )}
                    <p>면접은 <span style={{color: "redS"}}>3호관 000실</span>에서 20분 이내로 진행됩니다.</p>
                </div>
                <h2 style={{marginBottom:"30px"}}>면접 예약</h2>

                {startDate && endDate && (
                    <>
                        <h3>학번 입력</h3>
                        <input
                            className='midpassed-input-studentid'
                            type="text"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            maxLength="8"
                            placeholder="학번 8자리를 입력하세요"
                        />

                        <h3>날짜 선택</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {generateDateRange(startDate, endDate).map((date) => (
                                <button
                                    className='midpassed-timeselect-btn'
                                    key={date}
                                    onClick={() => setSelectedDate(date)}
                                    style={{
                                        backgroundColor: selectedDate === date ? '#007bff' : '#fff',
                                        color: selectedDate === date ? '#fff' : '#000',
                                    }}>
                                    {dayjs(date).format('MM/DD')}
                                </button>
                            ))}
                        </div>
                    </>
                )}

                {selectedDate && (
                    <>
                        <h3 style={{ marginTop: '20px' }}>시간 선택</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {availableTimeSlots.map((time) => (
                                <button
                                    className='midpassed-timeselect-btn'
                                    key={time}
                                    onClick={() => setSelectedTime(time)}
                                    style={{
                                        backgroundColor: availableTimeSlots.includes(time) ? (selectedTime === time ? '#007bff' : '#fff') : '#ccc',
                                        color: availableTimeSlots.includes(time) ? (selectedTime === time ? '#fff' : '#000') : '#888',
                                    }}>
                                    {time}
                                </button>
                            ))}
                        </div>
                    </>
                )}

                <button
                    className='midpassed-reservebtn'
                    onClick={handleSubmit}
                    disabled={!selectedDate || !selectedTime || !studentId}
                    style={{
                        backgroundColor: !selectedDate || !selectedTime || !studentId ? '#ccc' : '#007bff',
                        cursor: !selectedDate || !selectedTime || !studentId ? 'not-allowed' : 'pointer',
                    }}>
                    예약하기
                </button>

                <br />
                <iframe src="https://calendar.google.com/calendar/embed?src=80fbcb06f918240f8cbe80a113b5a65bc220bdde1d80d2410ede789fbb696046%40group.calendar.google.com&ctz=Asia%2FSeoul" 
                        style={{border: "0", width:"100%", height:"600px", frameborder:"0", scrolling:"no"}}>
                </iframe>
            </div>
        </div>
    );
};

export default MidPassed;
