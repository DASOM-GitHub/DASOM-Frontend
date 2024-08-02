import React, { useState, useEffect } from 'react';
import "./FAQ.css";


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "Q. DASOM은 어떤 동아리인가요?", answer: "DASOM은 동아리원들과 함께 프로젝트와 스터디 등 활동을 통해 공부를 하는 동아리입니다." },
    { question: "Q. 복학생도 가능한가요?", answer: "네, 컴퓨터소프트웨어공학과이시면 복학생도 \n가능합니다." },
    { question: "Q. DASOM은 어떤 활동을 하나요?", answer: "DASOM은 다양한 ... (활동 설명)" },
    { question: "Q. 프로젝트 경험이 있어야 하나요?", answer: "아니요, 프로젝트 경험이 없어도 동아리 가입이 \n가능합니다." },
    { question: "Q. 현재 모집 중인가요?", answer: "2024년 8기 모집은 종료되었어요.\n2025년 상반기에 찾아올 9기 모집을 기대해 주세요!" }
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className='faq-text'> 
        <h2>FAQ</h2>
        </div>
     
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className={`faq-question ${activeIndex === index ? 'active' : ''}`} onClick={() => handleClick(index)}>
              {faq.question}
              <span>{activeIndex === index ? '▲' : '▼'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer.split('\n').map((line, i) => (
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
      <button className="more-questions-button">아직 궁금한 점이 있다면 →</button>
    </div>

  );
};

export default FAQ;

