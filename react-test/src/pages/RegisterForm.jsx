// RegisterForm.js
import '../css/RegisterForm.scss'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterForm({ isActive, handleSubmit, handleChange, formData }) {
  return (
    <div className={`background ${isActive ? 'active' : ''}`}>
      <div className="wrap">
        <form className="content-wrapper" onSubmit={handleSubmit}>
          <h1>회원가입</h1>
          <div className="input-box">
            <input type="text" name="name" placeholder="이름" value={formData.name} onChange={handleChange} />
          </div>
          <div className="input-box">
            <input type="text" name="user_id" placeholder="아이디" value={formData.user_id} onChange={handleChange} />
          </div>
          <div className="input-box">
            <input type="password" name="password" placeholder="비밀번호" value={formData.password} onChange={handleChange} />
          </div>
          <div className="input-box">
            <input type="email" name="email" placeholder="이메일" value={formData.email} onChange={handleChange} />
          </div>
          <button type="submit">회원가입</button>
        </form>
      </div>
    </div>
  );
}
export default RegisterForm;