import React from "react";
import { Link } from "react-router-dom";
// import "./Recruit.css";
import "./Recruit2.css";
import Footer from "../../components/Footer";


/*
const Recruit = () => {
  const [recruitData, setRecruitData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecruitData = async () => {
      try {

        const response = await fetch("https://dasom-api.example.com/recruit", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_ACCESS_TOKEN"
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setRecruitData(data); 
      } catch (error) {
        setError(error.message); 
        console.error("데이터 에러:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchRecruitData();
  }, []);

  
  // 데이터를 성공적으로 가져왔을 때 렌더링할 UI
  return (
    <div className="recruit-main">
      {recruitData.map((item, index) => (
        <div key={index} className={index % 2 === 0 ? "left-box" : "right-box"}>
          <p className="recruit-period">{item.period}</p>
          <p className="recruit-title">{item.title}</p>
          <p className="recruit-description">{item.description}</p>
        </div>
      ))}
      <div className="center-button">
        <Link to="/Apply" className="recruit-button">
          지원하러가기 →
        </Link>
      </div>
    </div>
  );
};

*/




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
