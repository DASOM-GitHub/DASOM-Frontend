import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ApplySuccess.css";
import backArrow from '../../iamges/applysuccess/Apply-back-arrow.png';


const ApplySuccess = () => {

  const [midAnnounceDate, setMidAnnounceDate] = useState('');

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://dmu-dasom.or.kr/api/recruit/schedule');
        const data = await response.json();

        const recMidAnnounce = data.find(item => item.key === 'REC_MID_ANNOUNCE').value;
        const announceDate = new Date(recMidAnnounce);
        const formattedDate = `${announceDate.getUTCFullYear()}년 ${announceDate.getUTCMonth() + 1}월 ${announceDate.getUTCDate()}일 ${announceDate.getUTCHours()}시`;

        setMidAnnounceDate(formattedDate);

      } catch (error) {
        console.error('합격자 발표일 GET 에러:', error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();  

  const handleBackClick = () => {
    navigate('/main');  
  };

  return (
    <div className='ApplySuccess'>
      <div className='apply-title'>DASOM 33.5기에 지원해주셔서 감사합니다.</div>
      <div className='apply-content'>
        합격자 발표는 <span>{midAnnounceDate}</span>부터 <br />
        <span>DASOM 홈페이지</span>에서 확인하실 수 있습니다.<br/>
        학우님의 합격을 진심으로 기원하겠습니다.<br/>
        감사합니다.
      </div>
      <div className='apply-back-box' onClick={handleBackClick}>  
        <div className='apply-back'>돌아가기</div>
        <div className='apply-back-arrow'>
          <img src={backArrow} alt="back arrow" /> 
        </div>
      </div>
    </div>
  );
};

export default ApplySuccess;
