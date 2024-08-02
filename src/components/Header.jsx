import React, { useState, useEffect } from 'react';
import "./Header.css";
import logo from "../iamges/logo/header_logo.png";
import insta from "../iamges/logo/insta.png";
import github from "../iamges/logo/github.png";


const Header = () => {
  
  return (
    <header className="header">

    <nav className="container">

      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>

        <ul className='menu'>
          <li><a href="about">About</a> </li>
          <li><a href="recruit">Recurit</a> </li>
          <li><a href="FAQ">FAQ</a> </li>
        </ul>

        <ul className='icon'>
          <li><a href='https://github.com/DASOM-GitHub'><img src={github} alt='logo' /></a></li>
          <li><a href='https://www.instagram.com/dasom___official/'><img src={insta} alt='logo' /></a></li>
        </ul>

      
      
    </nav>
    </header>
  );
};

export default Header;

