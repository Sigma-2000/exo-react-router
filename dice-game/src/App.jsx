import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Description from './components/Description';
import Statistiques from './components/Statistiques';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}>
        <Route path="/description" element={<Description />} />
        <Route path="/statistique" element={<Statistiques />} />
      </Route>
    </Routes>
  );
};

export default App;