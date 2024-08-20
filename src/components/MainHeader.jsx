import React, { useState, useEffect } from 'react';
import "./MainHeader.css";
import logo from "../iamges/logo/mainheader_logo.png";
import insta from "../iamges/logo/maininsta.png";
import github from "../iamges/logo/maingithub.png";

const MainHeader = () => {
  return (
    <header className="MH-header">
  
      <nav className="MH-container">
  
        <div className='MH-logo'>
          <a href='Main'>
          <img src={logo} alt='logo' /></a>
        </div>
  
          <ul className='MH-menu'>
            <li><a href="about">About</a> </li>
            <li><a href="recruit">Recurit</a> </li>
            <li><a href="FAQ">FAQ</a> </li>
          </ul>
  
          <ul className='MH-icon'>
            <li><a href='https://github.com/DASOM-GitHub'><img src={github} alt='logo' /></a></li>
            <li><a href='https://www.instagram.com/dasom___official/'><img src={insta} alt='logo' /></a></li>
          </ul>
  
      </nav>
    </header>
    );
  };

export default MainHeader;