import React, { useState, useEffect } from 'react';
import './MidPassed.css';




const MidPassed = () => {

    const [url, setUrl] = useState();
    
    // useEffect( () => {
    //     const fetchData = async () => {
    //         try {
    //           const response = await fetch('https://dmu-dasom.or.kr/api');
    //           if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //           }
    //           const result = await response.json();
    //           setUrl(result); 
    //         } catch (error) {
    //           console.error('Fetch error:', error);
    //         }
    //       };
      
    //       fetchData();
    // }, []);

    const handleReserveClick = () => {
        window.open(url, '_blank');  // 새창으로 열기
    }


    return (
        <div className='midpassed'>
            <div className='midpassed-box'>
                <div className='midpassed-title'>축하드립니다</div>
                <div className='midpassed-texts'>
                    <p>DASOM 34기 지원에서 <span>1차 합격</span> 하셨습니다.</p>
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
