import React, { useState, useEffect } from 'react';
import "./About.css";
// import yewon from "../../iamges/member-profile/yewon.JPG";
// import styled from 'styled-components';


const About = () => {
// const ImageWrap = styled.div`
//   margin: 0 auto
//   `;

  return (
    <div className='about'>
      <div className='about-contentbox'>
      <div className='about-contentbox1'>
        <div className='about-title1'>RESEARCH</div>
        <div className='about-maintitle1'>탐구하며 새로운 분야에 눈을 뜨게</div>
        <div className='about-subtitle1'>다채로운 경험을 통해 보다 새롭고 심도있게 탐구합니다.</div>
      </div>
      <div className='about-contentbox2'>
        <div className='about-title2'>COOPERATION</div>
        <div className='about-maintitle2'>서로 협력하며 소통을 편안하게</div>
        <div className='about-subtitle2'>신회를 바탕으로 부원들과 보도 편안하게 몰입하며 협력합니다.</div>
      </div>
      <div className='about-contentbox3'>
        <div className='about-title3'>CHALLENGE</div>
        <div className='about-maintitle3'>함께하는 즐거움에서 도전하는 짜릿함으로</div>
        <div className='about-subtitle3'>각 분야의 동아리멤버들이 모여 도전적인 목표로 나아갑니다.</div>
        </div>
        </div>
      <div className='member'>
        <div className='member-title'>MEMBER</div>
        <div className='member-box'>
        <div className='member-lead'>LEAD</div>
        <div className='member-core'>CORE</div>
        <div className='member-front'>FRONT</div>
        <div className='member-back'>BACK</div>
        </div>
        {/* <div className='member-profile-box'>
          <ImageWrap className='member-profile'>
            <img src={yewon} alt='' />
          </ImageWrap>
          <div className='member-info'>이예원 / 2학년</div>
          <div className='member-ment'>저는 프론트앤드개발자를 희망하고 있습니다.</div>
          <ImageWrap className='member-profile'>
            <img src={yewon} alt='' />
          </ImageWrap>
          <div className='member-info'>이예원 / 2학년</div>
          <div className='member-ment'>저는 프론트앤드개발자를 희망하고 있습니다.</div>
        </div> */}
        </div>
    </div>
  );
};

export default About;

