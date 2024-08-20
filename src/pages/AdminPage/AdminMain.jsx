import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminMain.css';


const AdminMain = () => {

  return (
    <div className='adminmain'>
   <Link to='/AdminRecruit' className='admin-recurit'><div>지원자 관리하기</div></Link>
   <Link to='/admin-recurit-plan' className='admin-recurit-plan'><div>지원일정 관리하기</div></Link>
    </div>
  );
};

export default AdminMain;
