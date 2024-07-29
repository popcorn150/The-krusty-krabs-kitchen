import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Earn from './pages/Earn/Earn';
import Nopage from './pages/404';
import Invite from './pages/Invite/Invite';
import Wallet from './pages/Wallet/Wallet';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/earn' element={<Earn />} />
          <Route path='/invite' element={<Invite />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='*' element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
