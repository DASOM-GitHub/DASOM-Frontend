import React, { useState, useRef, useCallback, useEffect } from "react";
import "./Apply.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Apply = () => {
  const [inputName, setInputName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [tel, setTel] = useState("");
  const [motivation, setMotivation] = useState("");
  const [Grade, setGrade] = useState();
  const [Department, setDepartment] = useState();
  const [agreeAll, setAgreeAll] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const [applicants] = useState([]);

  const textRef = useRef();
  const navigate = useNavigate();

	const textResize = useCallback(() => {
		if (textRef.current) {
			textRef.current.style.height = '230px';
			textRef.current.style.height = textRef.current.scrollHeight + 'px';
		}
	}, []);

	const handleChange = (setter) => (e) => {
		setter(e.target.value);
	};

   {/* 학번이 0으로는 입력 불가 */}
  const handleStudentIdChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setStudentId(value);
      return;
  }

    if (!/^[1-9]\d*$/.test(value)) {
      // alert("학번은 0으로 시작할 수 없으며, 숫자만 입력 가능합니다.");
      return; // 입력을 무시
    }
    setStudentId(value);
  };

  
   {/* 예) 010-1111-1111로 변환 */}
  const handleTelChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거
    if (value.length > 3 && value.length <= 7) {
      value = value.replace(/(\d{3})(\d+)/, "$1-$2");
    } else if (value.length > 7) {
      value = value.replace(/(\d{3})(\d{4})(\d+)/, "$1-$2-$3");
    }
    setTel(value);
  };
  
  const handleCheckboxChange = (setter) => (e) => {
    setter(e.target.checked);
  };

  const handleAgreeAllChange = (e) => {
    const checked = e.target.checked;
    setAgreeAll(checked);
    setAgreeTerms(checked);
    setAgreePrivacy(checked);
    setAgreeMarketing(checked);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(
  //     "이름 : ",
  //     inputName,
  //     "학번 : ",
  //     studentId,
  //     "학년 : ",
  //     Grade,
  //     "학과 : ",
  //     Department,
  //     "연락처 : ",
  //     tel,
  //     "지원동기 : ",
  //     motivation,
  //     "약관 동의: ",
  //     agreeTerms,
  //     agreePrivacy,
  //     agreeMarketing
  //   );
  //   navigate("/ApplySuccess");
  // };


   {/* 신규 부원 지원 */}
  const handleSubmit = async (e) => {
    e.preventDefault();

    const applicationData = {
      studentId,
      applicantName: inputName,
      applicantContact: tel,
      applicantDept: Department,
      applicantGrade: parseInt(Grade),
      reasonForApply: motivation,
    };

    try {
      const response = await axios.post('https://dmu-dasom.or.kr/api/recruit', applicationData, {
        headers: {
          'Content-Type': 'application/json',  // Content-Type 헤더 추가
        }
      });

      if (response.status === 201) {
        console.log('지원 성공:', response.data);
        navigate("/ApplySuccess");
      } else {
        console.error('지원 실패:', response.status);
      }
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
    }
  };


  {/* 지원자 전체 조회 */}
  const fetchApplicants = async () => {
    const token = localStorage.getItem('accessToken');
  
    if (!token) {
      console.error('토큰이 존재하지 않습니다. 인증이 필요합니다.');
      return;
    }
  
    try {
      const response = await axios.get('https://dmu-dasom.or.kr/api/recruit', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        }
      });
      console.log('지원자 데이터:', response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error('인증 오류: 토큰이 유효하지 않습니다. 다시 로그인하세요.');
      } else {
        console.error('지원자 데이터를 불러오는 중 오류 발생:', error);
      }
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, []);


  {/* 특정 지원자 조회 */}
  const fetchApplicantById = async (applyId) => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      console.error('토큰이 존재하지 않습니다. 인증이 필요합니다.');
      return;
    }

    try {
      const response = await axios.get(`https://dmu-dasom.or.kr/api/recruit/${applyId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });

      console.log(`지원자 ${applyId} 데이터:`, response.data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error('인증 오류: 토큰이 유효하지 않습니다.');
      } else {
        console.error(`지원자 ${applyId} 데이터를 불러오는 중 오류 발생:`, error);
      }
    }
  };

 
  const findApplicantByName = (name) => {
    const applicant = applicants.find(app => app.applicantName === name);
    if (applicant) {
      console.log(`지원자의 applyId: ${applicant.applyId}`);
      fetchApplicantById(applicant.applyId); // 해당 지원자의 상세 데이터를 조회
    } else {
      console.error('해당 이름의 지원자를 찾을 수 없습니다.');
    }
  };


  useEffect(() => {
    if (applicants.length > 0) {
      findApplicantByName("홍길동"); // 예: 이름이 "홍길동"인 지원자를 찾기
    }
  }, [applicants]);






  const isFormComplete =
    inputName &&
    studentId &&
    tel &&
    motivation &&
    Grade &&
    Department &&
    agreeTerms &&
    agreePrivacy;



  return (
    <div className="apply-main">
      <div className="apply-title"><h2>지원하기</h2></div>
      <form className="apply-ques-box" onSubmit={handleSubmit}>
        <input
          className="apply-input-text"
          name="name"
          value={inputName}
          placeholder="이름"
          onChange={handleChange(setInputName)}
        ></input>
        <input
          className="apply-input-text"
          placeholder="학번"
          value={studentId}
          onChange={handleStudentIdChange}
        ></input>
        <div className="apply-grade-box">
          {["1학년", "2학년", "3학년"].map((grade) => (
            <label
              key={grade}
              className={`apply-grade ${Grade === grade ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="grade"
                value={grade}
                checked={Grade === grade}
                onChange={handleChange(setGrade)}
                className="apply-grade-radio"
              />
              {grade}
            </label>
          ))}
        </div>
        <div className="apply-department-box">
  {[
    { label: "컴퓨터소프트웨어공학과", value: "DEPT_SOFTWARE" },
    { label: "인공지능소프트웨어공학과", value: "DEPT_AI" },
    { label: "컴퓨터정보공학과", value: "DEPT_WEB" }
  ].map((department) => (
    <label
      key={department.value}  // 고유한 value를 key로 사용
      className={`apply-grade ${
        Department === department.value ? "selected" : ""
      }`}
    >
      <input
        type="radio" 
        name="department"
        value={department.value}
        checked={Department === department.value}
        onChange={(e) => setDepartment(e.target.value)}
        className="apply-grade-radio"
      />
      {department.label}
    </label>
  ))}
</div>
        <input
          className="apply-input-text"
          placeholder="연락처"
          value={tel}
          // onChange={handleChange(setTel)}
          onChange={handleTelChange}
        ></input>
        <textarea
          ref={textRef}
          className="apply-input-text2"
          placeholder="지원동기"
          value={motivation}
          onInput={textResize}
          onChange={handleChange(setMotivation)}
          rows={0}
        ></textarea>

        {/* 약관 동의 섹션 */}
        <div className="apply-agreement-box">
          <label className="apply-agreement">
            <input
              type="checkbox"
              checked={agreeAll}
              onChange={handleAgreeAllChange}
            />
            전체 약관 동의
          </label>
          <label className="apply-agreement">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={handleCheckboxChange(setAgreeTerms)}
            />
            [필수] 다솜 이용 약관에 동의
          </label>
          <label className="apply-agreement">
            <input
              type="checkbox"
              checked={agreePrivacy}
              onChange={handleCheckboxChange(setAgreePrivacy)}
            />
            [필수] 개인정보 수집 및 이용에 동의
          </label>
          <label className="apply-agreement">
            <input
              type="checkbox"
              checked={agreeMarketing}
              onChange={handleCheckboxChange(setAgreeMarketing)}
            />
            [선택] 마케팅 정보 수신 및 선택적 개인정보 제공
          </label>
        </div>

        <input
          type="submit"
          className="apply-submit"
          value="지원하기"
          disabled={!isFormComplete}
        ></input>
      </form>
    </div>
  );
};

export default Apply;
