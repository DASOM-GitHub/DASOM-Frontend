import React from "react";
import "./UserCheck.css";



const UserCheck = () => {
    return (
        <div className="usercheck">            
            <div className="check-title">DAOSM 33.5기 합격자 조회</div>
            <div className="check-info-box">
                <div className="check-info">
                합격자 조회는  지원하신 지원서를 
                <br/> 토대로 정보를 반영합니다. 🙂<br/> <br/> 
                지원서에 작성해주신 학번과 연락처 <br/>  뒷 번호 4자리를 입력해주세요.️❗️❗️
                </div>
                    </div>
                    <input
                        className="check-input-text"
                        placeholder="학번"
                        // value={studentId}
                        // onChange={handleChange(setStudentId)}
                        ></input>
                    <input
                        className="check-input-text"
                        placeholder="연락처 뒷 번호"
                        // value={studentPn}
                        // onChange={handleChange(setStudentId)}
                        ></input>
                        
                        <button className="check-button">
                            조회하기
                        </button>
                </div>
    )
}

export default UserCheck;



