import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import MainPage from './MainPage';
import ParentForm from './ParentForm'; // ParentForm을 import 합니다.
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />}>
            {/*<Route path="/parent" element={<ParentForm />}/>*/}
          </Route>
          <Route path="/main" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;