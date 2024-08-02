import React from "react";
import { Link } from "react-router-dom";
import "./Recruit.css";

const Recruit = () => {
  return (
    <div className="recruit-main">
      <div className="left-box">
        <p className="recruit-period">09.02 ~ 09.16</p>
        <p className="recruit-title">서류 접수</p>
        <p className="recruit-description">
          다채로운 경험을 통해 보다 새롭고
          <br /> 심도있게 탐구합니다.
        </p>
      </div>
      <div className="right-box">
        <p className="recruit-period">09.02 ~ 09.16</p>
        <p className="recruit-title">서류 접수</p>
        <p className="recruit-description">
          다채로운 경험을 통해 보다 새롭고
          <br /> 심도있게 탐구합니다.
        </p>
      </div>
      <div className="left-box">
        <p className="recruit-period">09.02 ~ 09.16</p>
        <p className="recruit-title">서류 접수</p>
        <p className="recruit-description">
          다채로운 경험을 통해 보다 새롭고
          <br /> 심도있게 탐구합니다.
        </p>
      </div>
      <div className="right-box">
        <p className="recruit-period">09.02 ~ 09.16</p>
        <p className="recruit-title">서류 접수</p>
        <p className="recruit-description">
          다채로운 경험을 통해 보다 새롭고
          <br /> 심도있게 탐구합니다.
        </p>
      </div>
      <div className="left-box">
        <p className="recruit-period">09.02 ~ 09.16</p>
        <p className="recruit-title">서류 접수</p>
        <p className="recruit-description">
          다채로운 경험을 통해 보다 새롭고
          <br /> 심도있게 탐구합니다.
        </p>
      </div>
      <div className="center-button">
        <Link to="/Apply" className="recruit-button">
          지원하러가기 →
        </Link>
      </div>
    </div>
  );
};

export default Recruit;
