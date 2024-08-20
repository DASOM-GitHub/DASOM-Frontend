import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminMain.css';


const AdminMain = () => {

  return (
    <div className='adminmain'>
   <Link to='/admin-recruit' className='admin-recruit'><div>지원자 관리하기</div></Link>
   <Link to='/admin-recruit-plan' className='admin-recruit-plan'><div>지원일정 관리하기</div></Link>
    </div>
  );
};

export default AdminMain;
