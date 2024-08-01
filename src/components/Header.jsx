import React, { useState, useEffect } from 'react';
import "./Header.css";
import logo from "../iamges/logo/header_logo.png";

const Header = () => {
  
  return (
    <header className="header">
      <div className="container">
      <nav className="header-nav">
        <ul>
          <li><a href="#about">About</a> </li>
          <li><a href="#Recurit">Recurit</a> </li>
          <li><a href="#FAQ">FAQ</a> </li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;

