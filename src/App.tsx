import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FuriaChatBot from './components/FuriaChatBot';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <NavBar />
        <main className="flex-1 overflow-y-auto bg-black">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<FuriaChatBot />} />
            <Route path="/sobre" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
