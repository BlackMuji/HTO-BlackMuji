import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import '../css/MainPage.css';

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
            <div className="background-image" onClick={handleClick}></div>
            <Outlet />
        </div>
    );
};

export default MainPage;