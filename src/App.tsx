import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FuriaChatBot from './components/FuriaChatBot';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.4
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <HomePage />
          </motion.div>
        } />
        <Route path="/chat" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <FuriaChatBot />
          </motion.div>
        } />
        <Route path="/sobre" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <AboutPage />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <NavBar />
        <main className="flex-1 overflow-hidden bg-black">
           <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
