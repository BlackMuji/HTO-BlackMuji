// RegisterForm.js
import './css/RegisterForm.css'
import React, { useState } from 'react';


function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    user_id: '',
    password: '',
    email: ''
  });

  // 입력 폼 변경 핸들러
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();

    // POST 요청 보내기
    fetch('http://localhost:5000/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('User registered:', data);
        // 등록이 성공했을 때 실행할 코드를 여기에 추가합니다.
      })
      .catch(error => {
        console.error('Error registering user:', error);
        // 등록에 실패했을 때 실행할 코드를 여기에 추가합니다.
      });
  };

  return (
    <div class="wrap">
      <form class="content-wrapper" onSubmit={handleSubmit}>
        <h1>회원가입</h1>
        <div class="input-box">
          <input
            type="text"
            name="name"
            placeholder="이름"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div class="input-box">
          <input
            type="text"
            name="user_id"
            placeholder="아이디"
            value={formData.user_id}
            onChange={handleChange}
          />
        </div>
        <div class="input-box">
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div class="input-box">
          <input
            type="email"
            name="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
    /*<div class="content-wrapper">
      <h1>Login</h1>
      <div class="input-box">
        <input type="text" placeholder="아이디" required>
        <i class='bx bxs-user'></i>
      </div>
      <div class="input-box">
        <input type="password" placeholder="비밀번호" required>
        <i class='bx bxs-lock'></i>
      </div>
      <div class="remember-forgot">
        <label><input type="checkbox"> Remember me</label>
      </div>
      <div class="login_wrap">
        <a href="#">아이디 찾기</a>
        <a href="#">비밀번호 찾기</a>
        <a href="#">회원가입</a>
      </div>
      <button type="submit" class="btn">로그인</button></div>*/
  );
}

export default RegisterForm;