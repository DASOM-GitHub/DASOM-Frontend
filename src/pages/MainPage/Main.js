import React, { useState, useEffect, useRef } from 'react';
import "./Main.css";
import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Main = () => {

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
  };

  return (
    <Container>
      <div>
        <div className='main'>
          <div className='main-1page'>
            <div className='main-1pageImg'></div>
            <div className='main-title-box'>
              <div className='main-title'>
                <p>컴퓨터소프트웨어학과</p>
                <p>전공동아리 DASOM</p>
              </div>
              <div className='main-subtitle'>
                34기 지원하기
                <img className='main-applybtn' src={`${process.env.PUBLIC_URL}/main_img/arrow.png`} alt=">"/>
              </div>
            </div>
            
          </div>

          <div className='main-2page'>
            <div className='main-2-title'>프로젝트, 스터디 등 함께 성장하는 동아리</div>
            <div className='main-2-contents'>
              <div className='main-2-boxes'>
                <div className='main-2-1box'>
                  <div className='main-1box-title'>발표를 통해 지식을 공유해요.</div>
                  <div className='main-1box-subtitle'>
                    <p>생생한 경험과 유익한 지식을 서로 나눠요.</p>
                    <p>다양한 주제로 토론해요.</p>
                  </div>
                </div>
                <div className='main-2-2box'>
                  <div className='main-1box-title'>발표를 통해 지식을 공유해요.</div>
                  <div className='main-1box-subtitle'>
                    <p>다양한 스터디에 참가하고</p>
                    <p>같은 목표를 향해 달려나가요.</p>
                  </div>
                </div>
                <div className='main-2-3box'>
                  <div className='main-1box-title'>함께 배우고 성장해요.</div>
                  <div className='main-1box-subtitle'>
                    <p>생생한 경험과 유익한 지식을 서로 나눠요.</p>
                    <p>다양한 주제로 토론해요.</p>
                  </div>
                </div>
              </div>
              <div className='main-2pageImg'>
                <image className='main-2-image'></image>
              </div>
            </div>
          </div>

          <div className='main-3page'>
            <div className='main-3-title'>컴퓨터소프트웨어공학과 전공동아리 DASOM</div>
            <div className='main-3-boxes'>
              <div className='main-3-1box'>
                <p>창립연도</p>
                <p>1992년</p>
              </div>
              <div className='main-3-1box'>
                <p>누적 회원 수</p>
                <p>1000+명</p>
              </div>
              <div className='main-3-1box'>
                <p>운영기수</p>
                <p>33기</p>
              </div>
              <div className='main-3-1box'>
                <p>EXPO 수상</p>
                <p>2+</p>                               {/* countup */}
              </div>
            </div>
          </div>

          <div className='main-4page'>
            <div className='main-4-title'>
              <p>Part</p>
              <img src={`${process.env.PUBLIC_URL}/main_img/arrow-circle-right.png`} alt=">"/>  
            </div>
            <div className='main-4-subtitle'>
              각 분야의 부원들이 한 팀을 이룹니다.
            </div>
            <div className='main-4-boxes'>
              <div className='main-4-boxes1'>
                <div className='main-4-1box'>Project Manager</div>
                <div className='main-4-2box'>Designer</div>
                <div className='main-4-1box'>CoreMember</div>
              </div>
              <div className='main-4-boxes2'>
                <div className='main-4-2box'>FrontEnd</div>
                <div className='main-4-1box'>BackEnd</div>
              </div>
            </div>
          </div>

          <div className='main-5page'>
            <div className='main-5-title'>
              <p>ABOUT</p>
              <img src={`${process.env.PUBLIC_URL}/main_img/arrow-circle-right.png`} alt=">"/>
            </div>
            <div className='main-5-slider'>
              <img src={`${process.env.PUBLIC_URL}/main_img/arrow-circle-left.png`} alt='prev'
              onClick={() => sliderRef.current.slickPrev()} className="main-5-prev-button"/>
              <Slider ref={sliderRef} {...settings}>
                <div className='main-5-slider-box'>
                  <div className='main-5-slider-img'>
                    <img src={`${process.env.PUBLIC_URL}/main_img/2024MT.png`} alt='MT사진'/>
                    <p>MT</p>
                  </div>
                </div>
                <div className='main-5-slider-box'>
                  <div className='main-5-slider-img'>
                    <img src={`${process.env.PUBLIC_URL}/main_img/2024HAKATON.png`} alt='HAKATON사진'/>
                    <p>HAKATON</p>
                  </div>
                </div>
                <div className='main-5-slider-box'>
                  <p>Slide 3</p>
                </div>
                <div className='main-5-slider-box'>
                  <p>Slide 4</p>
                </div>
              </Slider>
              <img src={`${process.env.PUBLIC_URL}/main_img/arrow-circle-right.png`} alt='next'
              onClick={() => sliderRef.current.slickNext()} className="main-5-next-button"/>
            </div>
          </div>

          <div className='main-6page'>
            
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
