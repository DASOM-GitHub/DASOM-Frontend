import React, { useState } from "react";
import OPENICON from "../../iamges/icon/faq-open-icon.png";
import CLOSEICON from "../../iamges/icon/faq-close-icon.png";
import "./FAQ.css";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Q. DASOM은 어떤 동아리인가요?",
      answer:
        "DASOM은 동아리원들과 함께 프로젝트와 스터디 등 활동을 통해 전공에 대해 공부를 하는 동아리예요.",
    },
    {
      question: "Q. 복학생도 가능한가요?",
      answer:
        "네, 컴퓨터공학부 학생이라면 누구나 가입이 가능해요. \n 당연히 복학생도 가능합니다!",
    },
    {
      question: "Q. DASOM은 어떤 활동을 하나요?",
      answer: "DASOM은 스터디, 프로젝트, 해커톤, MT등 다양한 활동을 하고있어요",
    },
    {
      question: "Q. 프로젝트 경험이 있어야 하나요?",
      answer:
        "아니요, 프로젝트 경험이 없어도, \n 개발에 능숙치 않아도 동아리 가입이 가능해요 :)",
    },
    {
      question: "Q. 현재 모집 중인가요?",
      answer: "네, 현재 다솜은 33.5기 모집 중이에요!",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-title">
        <h2>FAQ</h2>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {faq.question}
              <span>
                {activeIndex === index ? (
                  <img
                    src={CLOSEICON}
                    alt="Close Icon"
                    className="faq-close-icon"
                  />
                ) : (
                  <img
                    src={OPENICON}
                    alt="Open Icon"
                    className="faq-open-icon"
                  />
                )}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="faq-center-button">
        <Link
          to="https://www.instagram.com/dasom___official/"
          className="faq-recruit-button"
        >
          아직 궁금한 점이 있다면 →
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
