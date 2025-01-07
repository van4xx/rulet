import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom';
import './App.css';

function App() {
  const [theme, setTheme] = useState('morning');

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Header theme={theme} onThemeChange={setTheme} />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/chat" element={<ChatRoom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
