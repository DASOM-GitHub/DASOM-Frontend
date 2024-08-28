import "./MidPassed";
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Failed = () => {
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
                <div className='midpassed-title'><span>{name}</span>님, 지원해 주셔서 감사합니다.</div>
                <div className='midpassed-texts'>
                    <p>아쉽지만 이번 DASOM 33.5기 지원에서 <span>불합격</span>하셨습니다.</p>
                    <p>비록 이번에는 함께 할 수 없게 되었지만</p>
                    <p>지원 과정에서 보여주신 열정과 노력에 깊은 감사를 드립니다.</p>
                  
                    <p>{name}님의 앞으로의 여정과 새로운 도전에 행운이 가득하길 바라며</p>
                    <p>항상 응원하겠습니다.</p></div>

                    <div className='final-back-box' onClick={handleBackClick}>  
                    <div className='final-back'> 홈으로 → </div>
        </div>
            </div>  
        </div>
    )
}

export default Failed;
