// ParentComponent.js
import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import '../css/ParentForm.scss';

function ParentForm() {
  const [formData, setFormData] = useState({
    name: '',
    user_id: '',
    password: '',
    email: ''
  });

  const [registerActive, setRegisterActive] = useState(true);
  const [loginActive, setLoginActive] = useState(false);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // RegisterForm에서의 submit 처리
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
        // 등록이 성공했을 때 실행할 코드를 여기에 추가
      })
      .catch(error => {
        console.error('Error registering user:', error);
        // 등록에 실패했을 때 실행할 코드를 여기에 추가
      });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // LoginForm에서의 submit 처리
  };

  const handleToggleForm = () => {
    setRegisterActive(!registerActive);
    setLoginActive(!loginActive);
  };

  return (
    <div>
      <div className='totalform'>
        <button onClick={handleToggleForm}>폼 전환</button>
        {registerActive && (
          <RegisterForm
            isActive={registerActive}
            handleSubmit={handleRegisterSubmit}
            handleChange={() => { }}
            formData={{ setFormData }} // formData는 필요에 따라서 전달
          />
        )}
        {loginActive && (
          <LoginForm isActive={loginActive} />
        )}
      </div>
    </div>
  );
}

export default ParentForm;