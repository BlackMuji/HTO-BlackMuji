import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/MainPage.css';

const MainPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/register');
    };

    return (
        <div>
            <div className="background-image" onClick={handleClick}></div>
        </div>
    );
};

export default MainPage;