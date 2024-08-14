import React, { useState, useEffect } from 'react';
import "./About.css";
import Footer from "../../components/Footer";



const LeadComponent = () => <div className='profile-container1'>
<div className='profile-lead-image'></div>
<div className='profile-coment'>
<div className='member-info'>남호성 / 3학년</div>
 <div className='member-coment'>안녕하세요. 다솜 회장을 맡고 있습니다.</div>
</div>
</div>;
const FrontComponent = () => <div className='profile-container1'>
<div className='profile-suhyun-image'></div>
<div className='profile-coment'>
<div className='member-info'>김수현 / 2학년</div>
 <div className='member-coment'>안녕하세요. 다솜 프론트앤드팀장를 맡고 있습니다.</div>
</div>
</div>;
const BackComponent = () => <div className='profile-container1'>
<div className='profile-seongwan-image'></div>
<div className='profile-coment'>
<div className='member-info'>유승완 / 3학년</div>
 <div className='member-coment'>안녕하세요. 다솜 백앤드 팀장을 맡고 있습니다.</div>
</div>
</div>;
const DesignComponent = () =><div className='profile-container1'>
<div className='profile-image'></div>
<div className='profile-coment'>
<div className='member-info'>이예원 / 2학년</div>
 <div className='member-coment'>안녕하세요. 다솜 메이커스 디자인을 맡고 있습니다.</div>
</div>
</div>;

const About = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'lead':
                return <LeadComponent />;
            case 'front':
                return <FrontComponent />;
            case 'back':
                return <BackComponent />;
            case 'design':
                return <DesignComponent />;
            default:
                return <div></div>;
        }
    };

  

  return (
    <div id='about'>
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
        <div className='member-title'>MAKERS</div>
        <div>
            <div className='member-box'>
                <div className='member-lead' onClick={() => setSelectedComponent('lead')}>LEAD</div>
                <div className='member-front' onClick={() => setSelectedComponent('front')}>FRONT</div>
                <div className='member-back' onClick={() => setSelectedComponent('back')}>BACK</div>
                <div className='member-design' onClick={() => setSelectedComponent('design')}>DESIGN</div>
            </div>
            <div className='content'>
                {renderComponent()}
            </div>
        </div>
        {/* <div className='profile-container1'>
        <div className='profile-image'></div>
        <div className='profile-coment'>
        <div className='member-info'>이예원 / 2학년</div>
        <div className='member-coment'>안녕하세요. 다솜 메이커스 프론트앤드를 맡고 있습니다.</div>
        </div>
        </div> */}
        </div>
        <div className='activity'>
          <div className='activity-title'>ACTIVITY</div>
       <div className='activity-project-box'>
            <div className='activity-image'></div>
            <div className='activity-info'>
            <div className='project'>Project</div>
            <div className='project-title'>경험이 없어도 누구나 참여할 수 있는 PROJECT</div>
            <div className='project-subtitle'>
              아이디어를 발견하고 동아리 내에서 팀 빌딩을 진행합니다. 
              팀원들과 당신이 꿈꾸던 서비스를 직접 만들어보세요.</div>
              </div>
       </div>
       <div className='activity-project-box'>
            <div className='activity-image2'></div>
            <div className='activity-info'>
            <div className='project'>Study</div>
            <div className='project-title'>공부하고 싶은 언어를 함께 나눌 수 있는 STUDY</div>
            <div className='project-subtitle'>
              자신이 공부하고싶었던 언어나 프레임워크를 동아리 부원들과
              심도있게 공부해보세요.</div>
              </div>
       </div>
       <div className='activity-project-box'>
            <div className='activity-image3'></div>
            <div className='activity-info'>
            <div className='makers'>Makers</div>
            <div className='project-title'>DASOM 자체 홈페이지를 유지보수하는 MAKERS</div>
            <div className='project-subtitle'>
              DASOM에서 프로젝트를 기획하고 개발해보며 
              팀원들과 프로젝트를 진행해요.</div>
              </div>
       </div>
       <div className='activity-project-box'>
            <div className='activity-image4'></div>
            <div className='activity-info'>
            <div className='hackathon'>Hackathon</div>
            <div className='project-title'>분기별로 진행하는 다솜만의 HACKATHON</div>
            <div className='project-subtitle'>
              DASOM에서 분기별로 진행하는 자체 해커톤에서
              자신의 아이디어를 펼쳐 보세요.</div>
              </div>
       </div>
       <div className='activity-project-box'>
            <div className='activity-image5'></div>
            <div className='activity-info'>
            <div className='project'>MT</div>
            <div className='project-title'>동계 / 하계 MT</div>
            <div className='project-subtitle'>
              동계 / 하계 MT를 즐기며 
              동아리 부원들과 친목을 다져요.</div>
              </div>
       </div>
       </div>
       <Footer />
    </div>
  );
};

export default About;

