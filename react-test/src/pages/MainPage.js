import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <h1>메인 페이지</h1>
            <p>이 페이지는 리액트로 만든 메인 페이지입니다.</p>
            <Link to="/register">
                <button>이동</button>
            </Link>
        </div>
    );
};

export default MainPage;