import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MidPassed.css';


const MidPassed = () => {

    const [url, setUrl] = useState();
    const [name, setName] = useState();
    
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.interviewUrl) {
            setUrl(location.state.interviewUrl);
            setName(location.state.applicantName);
        }
    }, [location.state]);


    const handleReserveClick = () => {
        window.open(url, '_blank');  // 새창으로 열기
    }


    return (
        <div className='midpassed'>
            <div className='midpassed-box'>
                <div className='midpassed-title'>🎉 {name}님, 축하드립니다 🎉</div>
                <div className='midpassed-texts'>
                    <p>DASOM 33.5기 지원에서 <span>1차 합격</span> 하셨습니다.</p>
                    <p>함께하게 될 미래를 기대하며</p>
                    <p>면접을 통해 여러분의 이야기를 더 가까이에서 듣고자 합니다.</p>
                    <p>아래 버튼을 눌러 면접을 예약해주세요.</p>
                </div>
                <button
                    className='midpassed-reservebtn'
                    onClick={handleReserveClick}>
                    면접 예약하기
                </button>
            </div>
        </div>
    );
};

export default MidPassed;
