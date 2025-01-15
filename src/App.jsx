import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import GenerateDocument from './pages/GenerateDocument';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/generate" element={<GenerateDocument/>}/>
    </Routes>
  );
};

export default App;
