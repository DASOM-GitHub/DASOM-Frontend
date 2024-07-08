import React, { useState, useEffect } from 'react';
import "./Main.css";
import styled from "styled-components"


const Main = () => {
  
  return (
    <Container>
    <div>
        <div className='main'>
          <div className='main-1page'>
          <div className='main-title'>컴퓨터소프트웨어학과 전공동아리 DASOM</div>
          <div className='main-subtitle'>34기 지원하기</div>
          </div>
          <div className='2page'>
          <div className='main-2-title'>프로젝트, 스터디 등 함께 성장하는 동아리</div>
          <div className='main-2-1box'>
            <div className='1box-title'>발표를 통해 지식을 공유해요</div>
            <div className='1box-subtitle'>생생한 경험과 유익한 지식을 서로 나눠요. 다양한 주제로 토론해요.</div>
           </div>
           <div className='main-2-2box'>
            <div className='2box-title'>발표를 통해 지식을 공유해요</div>
            <div className='2box-subtitle'>생생한 경험과 유익한 지식을 서로 나눠요. 다양한 주제로 토론해요.</div>
           </div>
           <div className='main-2-3box'>
            <div className='3box-title'>발표를 통해 지식을 공유해요</div>
            <div className='3box-subtitle'>생생한 경험과 유익한 지식을 서로 나눠요. 다양한 주제로 토론해요.</div>
            <image className='main-2-image'></image>
           </div>
           </div>
        </div>
    </div>
    </Container>
  );
};

export default Main;


const Container = styled.main`
  position: relative;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  height:100vh
`;
