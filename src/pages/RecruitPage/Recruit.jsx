import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Recruit2.css";
import Footer from "../../components/Footer";
import axios from "axios";

const Recruit = () => {
  const [recruitData, setRecruitData] = useState({});
  const [currentStage, setCurrentStage] = useState("");

  // 초 단위 제거 함수
  const removeSeconds = (dateTimeString) => {
    if (!dateTimeString) return "날짜 정보 없음";
    return dateTimeString.slice(0, -3);
  };

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

  useEffect(() => {
    const now = new Date();
    const getDate = (dateString) => new Date(dateString);

    const REC_OPEN = getDate(recruitData["REC_OPEN"]);
    const REC_CLOSE = getDate(recruitData["REC_CLOSE"]);
    const REC_MID_ANNOUNCE = getDate(recruitData["REC_MID_ANNOUNCE"]);
    const REC_FINAL_ANNOUNCE = getDate(recruitData["REC_FINAL_ANNOUNCE"]);

    if (now >= REC_OPEN && now <= REC_CLOSE) {
      setCurrentStage("apply");
    } else if (now > REC_CLOSE && now < REC_MID_ANNOUNCE) {
      setCurrentStage("closed");
    } else if (now >= REC_MID_ANNOUNCE && now < REC_FINAL_ANNOUNCE) {
      setCurrentStage("midAnnounce");
    } else if (now >= REC_FINAL_ANNOUNCE) {
      setCurrentStage("finalAnnounce");
    }
  }, [recruitData]);

  const renderButton = () => {
    switch (currentStage) {
      case "apply":
        return (
          <Link to="/Apply" className="recruit-button">
            지원하러가기 →
          </Link>
        );
      case "closed":
        return (
          <button className="recruit-button" disabled>
            현재는 지원기간이 아닙니다.
          </button>
        );
      case "midAnnounce":
        return (
          <Link to="/UserCheck" className="recruit-button">
            서류 합격자 조회 →
          </Link>
        );
      case "finalAnnounce":
        return (
          <Link to="/UserFinalCheck" className="recruit-button">
            최종 합격자 조회 →
          </Link>
        );
      default:
        return null;
    }
  };

  return (
    <div className="recruit-main">
      <div className="left-box">
        <p className="recruit-period">
          {removeSeconds(recruitData["REC_OPEN"])}
        </p>
        <p className="recruit-title">모집 시작</p>
        <p className="recruit-description">
          다채로운 경험을 통해 보다 새롭고
          <br /> 심도있게 탐구합니다.
        </p>
      </div>
      <div className="right-box">
        <p className="recruit-period">
          {removeSeconds(recruitData["REC_CLOSE"])}
        </p>
        <p className="recruit-title">지원 종료</p>
        <p className="recruit-description">
          다채로운 경험을 통해 보다 새롭고
          <br /> 심도있게 탐구합니다.
        </p>
      </div>
      <div className="left-box">
        <p className="recruit-period">
          {removeSeconds(recruitData["REC_MID_ANNOUNCE"])}
        </p>
        <p className="recruit-title">서류 합격 발표</p>
        <p className="recruit-description">
          다채로운 경험을 통해 보다 새롭고
          <br /> 심도있게 탐구합니다.
        </p>
      </div>
      <div className="right-box">
        <p className="recruit-period">
          {removeSeconds(recruitData["REC_INTERVIEW_START"])}
        </p>
        <p className="recruit-title">면접 시작</p>
        <p className="recruit-description">
          다채로운 경험을 통해 보다 새롭고
          <br /> 심도있게 탐구합니다.
        </p>
      </div>
      <div className="left-box">
        <p className="recruit-period">
          {removeSeconds(recruitData["REC_INTERVIEW_END"])}
        </p>
        <p className="recruit-title">면접 종료</p>
        <p className="recruit-description">
          다채로운 경험을 통해 보다 새롭고
          <br /> 심도있게 탐구합니다.
        </p>
      </div>
      <div className="right-box">
        <p className="recruit-period">
          {removeSeconds(recruitData["REC_FINAL_ANNOUNCE"])}
        </p>
        <p className="recruit-title">최종 합격 발표</p>
        <p className="recruit-description">
          다채로운 경험을 통해 보다 새롭고
          <br /> 심도있게 탐구합니다.
        </p>
      </div>
      <div className="center-button">
        {renderButton()}
      </div>
    </div>
  );
};

export default Recruit;
