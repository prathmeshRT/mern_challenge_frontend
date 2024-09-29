import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Transactions from './components/Transactions';
import Statistics from './components/Statistics';
import Charts from './components/Charts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Transactions />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </Router>
  );
}

export default App;
