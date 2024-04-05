import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Dashboard.css';
import logo from '../images/icon.png';
import logo2 from '../images/logo.png';


const Dashboard = () => {
    return (
        <div className='application-wrap'>
            <div className='main-nav'>
                <div className='logo-wrap'>
                    <img src={logo} alt="" /> 
                    <img src={logo2} alt="" /> 
                </div>
                <div className='nav-content'>
                    <div className='link-wrap'>
                        <Link to="/page1">Tutorial</Link>
                    </div>
                    <div><Link to="/page2">Challenges</Link></div>
                    <div><Link to="/page3">Rankings</Link></div>
                </div>
            </div>
            <div className='top-wrap'>
                <div className='top-nav-bar'>
                    <div className='navbar-act'>
                        <div><Link to="/page4">test</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;