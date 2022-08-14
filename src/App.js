import React from 'react';
import Health from './components/pages/health/Health';
import Life from './components/pages/life/Life';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/hayat' element={<Life />} />
      <Route path='/saglik' element={<Health />} />
    </Routes>
  );
}

export default App;
