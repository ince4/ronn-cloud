// import logo from './logo.svg';
import './App.css';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const TestPage = lazy(() => import('./pages/TestPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
// const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;