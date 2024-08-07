import React, { useState, useEffect } from "react";
import "./ApplySuccess.css";
import { Link } from "react-router-dom";

const ApplySuccess = () => {
  return (
    <div className="AS-main">
      <p className="AS-title">DASOM 34기에 지원해주셔서 감사합니다.</p>
      <p className="AS-text">
        합격자 발표일은 2024년 N월 N일이며,
        <br />
        학우님의 합격을 진심으로 기원하겠습니다.
        <br />
        감사합니다.
      </p>
      <Link className="AS-back" to={"/main"}>
        돌아가기
        <br />
      </Link>
    </div>
  );
};

export default ApplySuccess;
