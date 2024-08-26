import React, { useState } from "react";
import "./UserCheck.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserCheck = () => {
    const [studentId, setStudentId] = useState();
    const [contactLastDigit, setContactLastDigit] = useState();
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const checkType = "FIRST_PASS";
    
    const handleCheck = async () => {
        try {
            // 데이터 유효성 검증
            if (studentId.length < 8 || studentId.startsWith("0")) {
                throw new Error("학번은 8자리 이상이어야 하며, 0으로 시작할 수 없습니다.");
            }

            if (contactLastDigit.length !== 4) {
                throw new Error("연락처 뒷 번호는 4자리여야 합니다.");
            }

            
            // GET 요청 보내기
            const response = await axios.get(`https://dmu-dasom.or.kr/api/recruit/result`, {
                checkType :checkType, // "FIRST_PASS" 또는 "SECOND_PASS" 중 하나 선택
                studentId: String(studentId), // studentId를 문자열로 변환
                contactLastDigit: String(contactLastDigit), 
                
            });
            
            if (response.status === 200) {
                console.log('성공', response.data);
                navigate("/MidPassed"); // 페이지 이동
            } else {
                throw new Error(`조회에 실패했습니다. 상태 코드: ${response.status}`);
            }
        } catch (error) {
            console.error("에러 발생:", error.message);
            setError(error.message);
        }
    };

    return (
        <div className="usercheck">
            <div className="check-title">DAOSM 33.5기 합격자 조회</div>
            <div className="check-info-box">
                <div className="check-info">
                    합격자 조회는 지원하신 지원서를 
                    <br/> 토대로 정보를 반영합니다. 🙂<br/> <br/> 
                    지원서에 작성해주신 학번과 연락처 <br/> 뒷 번호 4자리를 입력해주세요.️❗️❗️
                </div>
            </div>
            <input
                className="check-input-text"
                placeholder="학번"
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
            />
            <input
                className="check-input-text"
                placeholder="연락처 뒷 번호"
                type="text"
                value={contactLastDigit}
                onChange={(e) => setContactLastDigit(e.target.value)}
            />
            <button className="check-button" onClick={handleCheck}>
                조회하기
            </button>

            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default UserCheck;
