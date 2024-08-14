import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ApplySuccess.css";
import backArrow from '../../iamges/applysuccess/Apply-back-arrow.png';


const ApplySuccess = () => {
  const navigate = useNavigate();  

  const handleBackClick = () => {
    navigate('/main');  
  };

  return (
    <div className='ApplySuccess'>
      <div className='apply-title'>DASOM 34기에 지원해주셔서 감사합니다.</div>
      <div className='apply-content'>
        합격자 발표일은 2024년 N월 N일이며,<br/>
         학우님의 합격을 진심으로 기원하겠습니다. ,<br/>
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
