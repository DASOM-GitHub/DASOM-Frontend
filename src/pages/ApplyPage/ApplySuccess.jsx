import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ApplySuccess.css";

const ApplySuccess = () => {
  return (
    <div>
      <p>DASOM 34기에 지원해주셔서 감사합니다.</p>
      <p>
        합격자 발표일은 2024년 N월 N일이며,
        <br /> 학우님의 합격을 진심으로 기원하겠습니다.
        <br /> 감사합니다.
      </p>
      <Link to="/main">돌아가기</Link>
    </div>
  );
};

export default ApplySuccess;
