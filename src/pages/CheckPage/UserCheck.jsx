import React, { useState } from "react";
import "./UserCheck.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserCheck = () => {
    const [studentId, setStudentId] = useState("");
    const [contactLastDigit, setContactLastDigit] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (setter) => (event) => {
        setter(event.target.value);
    };

    const handleCheck = async () => {
        // 유효성 검사
        if (studentId.length !== 8 || !/^\d+$/.test(studentId)) {
            setError("학번은 8자리 숫자로 입력해주세요.");
            return;
        }
        
        if (contactLastDigit.length !== 4 || !/^\d+$/.test(contactLastDigit)) {
            setError("연락처 뒷 번호는 4자리 숫자로 입력해주세요.");
            return;
        }

        try {
            // API 요청 보내기
            const response = await axios.get('https://dmu-dasom.or.kr/api/recruit/result', {
                params: {
                    checkType: "FIRST_PASS",  // 확인하고 있는 조회 타입 (예: "FIRST_PASS")
                    studentId: studentId.trim(),  // 학번
                    contactLastDigit: contactLastDigit.trim(),  // 연락처 뒷자리
                },
            });

            // 응답 데이터에서 합격 여부 확인
            if (response.status === 200 && response.data) {
                setError(null); // 이전 오류 메시지 초기화
                if (response.data.isApplicantPassed) {
                    navigate('/MidPassed', { // 합격 페이지로 이동
                        state: { 
                            interviewUrl: response.data.etc 
                        } 
                    });
                } else {
                    navigate("/Failed");  // 불합격 페이지로 이동
                }
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    const errorCode = error.response.data.message;
                    if (errorCode === "100") {
                        setError("현재는 합격 조회 기간이 아닙니다.");
                    } else if (errorCode === "101") {
                        setError("정보가 일치하지 않습니다. 학번과 연락처 뒷자리를 다시 확인해주세요.");
                    } else {
                        setError("잘못된 요청입니다. 다시 시도해주세요.");
                    }
                } else if (error.response.status === 404) {
                    setError("해당하는 지원자가 없습니다.");
                } else {
                    setError("서버와의 통신 중 오류가 발생했습니다.");
                }
            } else {
                setError("서버와의 통신 중 오류가 발생했습니다.");
            }
        }
    };

    return (
        <div className="usercheck">
            <div className="check-title">DAOSM 33.5기 서류 합격자 조회</div>
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
                value={studentId}
                onChange={handleChange(setStudentId)}
            />
            <input
                className="check-input-text"
                placeholder="연락처 뒷 번호"
                value={contactLastDigit}
                onChange={handleChange(setContactLastDigit)}
            />
            <button className="check-button" onClick={handleCheck}>
                조회하기
            </button>

            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default UserCheck;
