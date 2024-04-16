import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/MainPage.scss';

const MainPage = () => {
  /*const navigate = useNavigate();*/

  const [isClicked, setIsClicked] = useState(false);

  const handleBackgroundClick = () => {
    setIsClicked(!isClicked); // 배경 이미지 클릭 시 상태 변경
  };

  // useEffect(() => {
  //   document.querySelector('.background-image').classList.add('change-background');
  // }, []);

  return (
    <div>
      <div
        className={isClicked ? "background-image change-background" : "background-image"} // 상태에 따라 클래스 변경
        onClick={handleBackgroundClick} // 배경 이미지 클릭 시 이벤트 핸들러 호출
      ></div>
      <form className={isClicked ? "content-wrapper visible" : "content-wrapper"}>
        <h1>로그인</h1>
        <div className='login-form'>
          <div className="input-box">
            <input type="text" placeholder="아이디" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="비밀번호" />
          </div>
          <Link to="/main">
            <button type="submit">로그인</button>
          </Link>
        </div>
        <Link to="/register">
          <h4>회원가입</h4>
        </Link>
      </form>
    </div>
  );
};

export default MainPage;