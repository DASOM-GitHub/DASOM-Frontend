import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './MidPassed.css';


const MidPassed = () => {
    const navigate = useNavigate();  
    const handleBackClick = () => {
        navigate('/main');  
      };
    

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
                <div className='midpassed-title'>🎉 <span>{name}</span>님, 축하드립니다 🎉</div>
                <div className='midpassed-texts'>
                    <p>서류 검토 결과, DASOM 33.5기에 <span>서류 합격</span> 하셨습니다.</p>
                    <p>함께하게 될 미래를 기대하며
                    면접을 통해 여러분의 이야기를 더 가까이에서 듣고자 합니다.</p>
                    <br/>
                    <p>33.5기 면접은 오프라인 방식으로 진행합니다.</p>
                    <p>하단 예약하기 버튼을 눌러 가능한 시간대에 면접을 예약해주시면 됩니다.</p>
                    <p>시간 선택은 선착순이며 다수의 지원자분들과 원활한 시간조율을 위한 불가피한 방안인 점 이해 바랍니다.</p>
                    <p>하단 버튼을 눌러 면접을 예약해주세요.</p>
                    <br/>
                    </div>
                    <div className='midpassed-text2'>
                    <p><span>면접은 3호관 5층 DASOM 동아리방에서 진행됩니다.</span></p>
                    <p><span>{name}</span>님과 만날 날을 고대하고 있겠습니다.</p>
                    <p>이후 궁금하신 점은 <span>회장 남호성: 010-6225-6023</span> 을 통해 문의 부탁드립니다.</p>
                    <p>감사합니다. 🙂</p>
                    </div>
                    
       

                
                <button
                    className='midpassed-reservebtn'
                    onClick={handleReserveClick}>
                    면접 예약하기
                </button>

                <div className='back-box' onClick={handleBackClick}>  
                    <div className='back'> 홈으로 → </div>
        </div>
      </div>
            </div>
    );
};

export default MidPassed;
