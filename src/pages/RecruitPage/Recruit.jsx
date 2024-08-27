import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./Recruit.css";
import "./Recruit2.css";
// import Footer from "../../components/Footer";
import axios from "axios";

const Recruit = () => {
  const [recruitData, setRecruitData] = useState({});

  useEffect(() => {
    // API에서 데이터를 가져오기
    const fetchRecruitData = async () => {
      try {
      
        const response = await axios.get('https://dmu-dasom.or.kr/api/recruit/schedule', {
          headers: {
            'Content-Type': 'application/json',
          }
        });

        const data = response.data.reduce((acc, item) => {
          acc[item.key] = item.value;
          return acc;
        }, {});

        setRecruitData(data);
      } catch (error) {
        console.error("Error fetching recruit data:", error);
      }
    };

    fetchRecruitData();
  }, []);

  return (
    <div className="recruit-main">
      <div className="left-box">
        <p className="recruit-period">
          {recruitData["REC_OPEN"] || "날짜 정보 없음"}
        </p>
        <p className="recruit-title">모집 시작</p>
        <p className="recruit-description">
          다채로운 경험을 통해 보다 새롭고
          <br /> 심도있게 탐구합니다.
        </p>
      </div>
      <div className="right-box">
        <p className="recruit-period">
          {recruitData["REC_CLOSE"] || "날짜 정보 없음"}
        </p>
        <p className="recruit-title">지원 종료</p>
        <p className="recruit-description">
          다채로운 경험을 통해 보다 새롭고
          <br /> 심도있게 탐구합니다.
        </p>
      </div>
      <div className="left-box">
        <p className="recruit-period">
          {recruitData["REC_MID_ANNOUNCE"] || "날짜 정보 없음"}
        </p>
        <p className="recruit-title">서류 합격 발표</p>
        <p className="recruit-description">
          다채로운 경험을 통해 보다 새롭고
          <br /> 심도있게 탐구합니다.
        </p>
      </div>
      <div className="right-box">
        <p className="recruit-period">
          {recruitData["REC_INTERVIEW_START"] || "날짜 정보 없음"}
        </p>
        <p className="recruit-title">면접 시작</p>
        <p className="recruit-description">
          다채로운 경험을 통해 보다 새롭고
          <br /> 심도있게 탐구합니다.
        </p>
      </div>
      <div className="left-box">
        <p className="recruit-period">
          {recruitData["REC_INTERVIEW_END"] || "날짜 정보 없음"}
        </p>
        <p className="recruit-title">면접 종료</p>
        <p className="recruit-description">
          다채로운 경험을 통해 보다 새롭고
          <br /> 심도있게 탐구합니다.
        </p>
      </div>
      <div className="right-box">
        <p className="recruit-period">
          {recruitData["REC_FINAL_ANNOUNCE"] || "날짜 정보 없음"}
        </p>
        <p className="recruit-title">최종 합격 발표</p>
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
