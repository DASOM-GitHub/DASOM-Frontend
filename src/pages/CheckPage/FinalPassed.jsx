import React, { useState, useEffect } from 'react';
import "./FinalPassed.css";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const FinalPassed = () => {
    const navigate = useNavigate();  
    const handleBackClick = () => {
        navigate('/main');  
      };
    

    const [name, setName] = useState();
    const location = useLocation();
    useEffect(() => {
        if (location.state && location.state.applicantName) {
            setName(location.state.applicantName);
        }
    }, [location.state]);
    console.log("Location State:", location.state);
    

    
    return (
        <div className="midpassed">
            <div className="midpassed-box">       
                <div className='midpassed-title'>🎉 <span>{name}님,</span> 축하드립니다 🎉</div>
                <div className='midpassed-texts'>
                    <p>DASOM 33.5기 지원에서 <span>최종 합격</span> 하셨습니다.</p>
                    <br/>
                    <p>앞으로 33.5기 DASOM과 함께하게 되어 진심으로 기쁩니다.</p>
                    <p>여러분의 재능과 열정이 더욱 빛날 수 있기를 응원하며</p>
                    <p>더 큰 꿈을 향해 나아갈 수 있기를 기대합니다.</p>
                    <br/>
                    <p>향후 활동은 카카오톡 단체 톡방 및 인스타 공식 그룹을 통해 운영 및 진행될 것이며,</p>
                    <p>곧 카카오톡 단체 톡방에 초대해드릴 예정입니다.</p>
                    <p>DASOM의 33.5번째 열정이 되신 것을 축하드립니다!</p>
                    </div>
                    <div className='midpassed-text2'>
                    <p>기타 문의사항은 회장 <span>남호성: 010-6225-6023</span>을 통해 문의부탁드립니다.</p>
                    </div>

                
                <div className='final-back-box' onClick={handleBackClick}>  
                    <div className='final-back'> 홈으로 → </div>
        </div>
            </div>
        </div>
    )
}


export default FinalPassed;



