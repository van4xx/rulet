import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ChatRoom from './components/ChatRoom';
import Home from './components/Home';
import Features from './components/pages/Features';
import Support from './components/pages/Support';
import Legal from './components/pages/Legal';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<ChatRoom />} />
            <Route path="/features" element={<Features />} />
            <Route path="/support" element={<Support />} />
            <Route path="/legal/*" element={<Legal />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
