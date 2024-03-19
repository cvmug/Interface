import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CollectionPage from './CollectionPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/ordinal_maxi_biz" />} />
        <Route path="/:collectionName" element={<CollectionPage />} />
      </Routes>
    </Router>
  );
}

export default App;