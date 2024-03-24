import React, { useState } from 'react';
import './App.css'; // 필요한 CSS 파일을 import 해주세요

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <div className="App">
      {/* 배경 이미지 */}
      <div
        className="background"
        style={{
          backgroundImage: "url('/public/Fullscreen_black.png')",
          opacity: showLoginForm ? 1 : 0, // 로그인 폼이 보일 때 배경이미지의 투명도를 조절합니다.
        }}
        onClick={() => setShowLoginForm(!showLoginForm)} // 배경을 클릭하면 로그인 폼을 토글합니다.
      ></div>
      
      {/* 로그인 폼 */}
      {showLoginForm && (
        <div className="loginForm">
          <h2>로그인</h2>
          <form>
            <label htmlFor="username">사용자명:</label><br />
            <input type="text" id="username" name="username" /><br />
            <label htmlFor="password">비밀번호:</label><br />
            <input type="password" id="password" name="password" /><br /><br />
            <input type="submit" value="로그인" />
          </form>
        </div>
      )}
    </div>
  );
}

export default App;