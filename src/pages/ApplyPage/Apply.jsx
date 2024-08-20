import React, { useState, useRef, useCallback } from "react";
import "./Apply.css";
import { Link, useNavigate } from "react-router-dom";

const Apply = () => {
  const [inputName, setInputName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [tel, setTel] = useState("");
  const [motivation, setMotivation] = useState("");
  const [Grade, setGrade] = useState();
  const [Department, setDepartment] = useState();
  const textRef = useRef();

  const navigate = useNavigate();

  const textResize = useCallback(() => {
    if (textRef.current) {
      textRef.current.style.height = "230px";
      textRef.current.style.height = textRef.current.scrollHeight + "px";
    }
  }, []);

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "이름 : ",
      inputName,
      "학번 : ",
      studentId,
      "학년 : ",
      Grade,
      "학과 : ",
      Department,
      "연락처 : ",
      tel,
      "지원동기 : ",
      motivation
    );
    navigate("/ApplySuccess");
  };

  const isFormComplete =
    inputName && studentId && tel && motivation && Grade && Department;


    /*
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!isFormComplete) return;
  
      setIsSubmitting(true);
      setError(null);
  
      const applicationData = {
        studentId,
        applicantName: inputName,
        applicantEmail: email, 
        applicantContact: tel,
        applicantDept:
          Department === "컴퓨터소프트웨어공학과"
            ? "DEPT_SOFTWARE"
            : Department === "인공지능소프트웨어공학과"
            ? "DEPT_AI"
            : "DEPT_WEB",
        applicantGrade: Grade === "1학년" ? 1 : Grade === "2학년" ? 2 : 3,
        reasonForApply: motivation,
      };
  
      try {
        const response = await fetch("https://api.example.com/recruit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_ACCESS_TOKEN", // 필요시 인증 토큰 추가
          },
          body: JSON.stringify(applicationData),
        });
  
        const result = await response.json();
        console.log("API 응답:", result);
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        alert("지원이 성공적으로 접수되었습니다!");
      } catch (err) {
        console.error("지원서 제출 중 오류가 발생했습니다:", err);
        setError("지원서 제출 중 오류가 발생했습니다. 다시 시도해 주세요.");
      } finally {
        setIsSubmitting(false);
      }
    };
    */



  return (
    <div className="apply-main">
      <div className="apply-title">지원하기</div>
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
          onChange={handleChange(setStudentId)}
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
            "컴퓨터소프트웨어공학과",
            "인공지능소프트웨어공학과",
            "컴퓨터정보공학과",
          ].map((department) => (
            <label
              key={department}
              className={`apply-grade ${
                Department === department ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                value={department}
                checked={Department === department}
                onChange={handleChange(setDepartment)}
                className="apply-grade-radio"
              />
              {department}
            </label>
          ))}
        </div>
        <input
          className="apply-input-text"
          placeholder="연락처"
          value={tel}
          onChange={handleChange(setTel)}
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