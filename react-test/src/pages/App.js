import React, { Component } from 'react';
//import '../css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './MainPage';
import RegisterForm from './RegisterForm';
import Test from './Test';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="" element={<MainPage />}/>
          <Route path="/register" element={<RegisterForm />}/>
          <Route path="/test" element={<Test />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;