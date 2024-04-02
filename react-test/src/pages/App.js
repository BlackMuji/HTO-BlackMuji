import React from 'react';
//import '../css/App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import MainPage from './MainPage';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import Test from './Test';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="/register" element={<RegisterForm />}/>
            <Route path="/login" element={<LoginForm />}/>
          </Route>
          <Route path="/test" element={<Test />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;