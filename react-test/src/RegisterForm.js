// RegisterForm.js

import React, { useState } from 'react';
import { registerUser } from './components/actions'; // actions 파일에서 registerUser 액션 생성자를 가져옵니다.

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
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
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="name" 
        value={formData.name} 
        onChange={handleChange} 
      />
      <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        value={formData.password} 
        onChange={handleChange} 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={formData.email} 
        onChange={handleChange} 
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;