import { Alert } from '@mui/material';
import React from 'react';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('accessToken');
    console.log ("private 토큰 값 : " ,token)
  if (!token) {
    return alert("접근권한이 없습니다.");
    
  }

  // 토큰이 있으면 해당 페이지로 이동
  return children;
};

export default PrivateRoute;
