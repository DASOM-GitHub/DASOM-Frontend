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
