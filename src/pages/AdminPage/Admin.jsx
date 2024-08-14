import React, { useState, useEffect } from 'react';
import "./Admin.css";
import { Link, useNavigate } from 'react-router-dom'


const Admin = () => {

        const [id, setId] = useState('');
        const [password, setPassword] = useState('');
      
        const navigate = useNavigate();
        // const [, setCookie] = useCookies(['refreshToken']);
      

        //   const handleSubmit = async () => {
        //       try {
        //         const response = await axios.post('https://dmu-dasom.or.kr:8090/admin', {
        //               id : id,
        //               password : password
        //         });
      
        //         if (response.request.status === 200 ) {
        //         console.log(response.status)
        //           console.log('로그인 성공');
        //            localStorage.setItem("accessToken", response.data.data.accessToken);
        //            setCookie("refreshToken", response.data.data.refreshToken)
        //            console.log(response.request.status)
        //           navigate('/admin2');
        //         }
        //       } catch (error) {
        //         if (error.response && error.response.status === 200) {
        //           console.error('인증완료.');
        //         } else {
        //         alert("아이디 혹은 비밀번호가 틀렸습니다")
        //           console.error('에러:', error);
        //         }
        //       }
        //     };
  return (
   <div className='admin'>
    <div className='admin-login-form'>
        <div className='admin-login-title'>관리자 페이지 입니다.</div>
        <div className='admin-login-id'>
        <input
        type='email'
        className="login-id"
        placeholder='아이디'
        value={id}
        onChange={(e) => setId(e.target.value)}
        />
        </div>
        <div className='admin-login-pw'>
        <input
        type='text'
        className="login-pw"
        placeholder='비밀번호'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button className='login-button'>로그인 하기</button>
        </div>
    </div>
  );
};

export default Admin;
