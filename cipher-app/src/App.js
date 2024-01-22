import React from 'react';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
// import Caesar from './Components/Caesar';
import OneTimePad from './Components/OneTimePad';
import Caesar from './Components/Caesar';
import Viginere from './Components/Viginere';
import HIll from './Components/HIll';

export default function App() {
  return (
    <>
    <div>
      <Navbar/>
      </div>
      <div className="router">
      <Routes>
        <Route path="/oneTimePad" element={<OneTimePad/>} />
      </Routes>
      <Routes>
        <Route path="/caesar" element={<Caesar />} />
      </Routes>
      <Routes>
        <Route path="/viginere" element={<Viginere />} />
      </Routes>
      <Routes>
        <Route path="/hill" element={< HIll/>} />
      </Routes>
      </div>
      </>
  );
}
