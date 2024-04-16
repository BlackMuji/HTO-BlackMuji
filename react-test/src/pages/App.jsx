import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import MainPage from './MainPage';
import RegisterForm from './RegisterForm';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterForm />}/>
          <Route path="/main" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;