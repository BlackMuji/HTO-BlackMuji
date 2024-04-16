import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import '../css/MainPage.scss';

const MainPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/parent');
  };

  useEffect(() => {
    document.querySelector('.background-image').classList.add('change-background');
  }, []);

  return (
    <div>
      <div className="background-image" /*onClick={handleClick}*/></div>
      <form className="content-wrapper">
        <h1>로그인</h1>
        <div className='login-form'>
          <div className="input-box">
            <input type="text" placeholder="아이디" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="비밀번호" />
          </div>
          <button type="submit">로그인</button>
        </div>
        <h5>footer</h5>
      </form>
      {/*<Outlet />*/}
    </div>
  );
};

export default MainPage;