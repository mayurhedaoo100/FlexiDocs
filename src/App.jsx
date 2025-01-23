import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import GenerateDocument from './pages/GenerateDocument';
import Templates from './pages/Templates';
import Library from './pages/Library';
import Support from './pages/Support';
import Company from './pages/Company';
import Preview from './pages/Preview';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/GenerateDoc" element={<GenerateDocument/>}/>
      <Route path="/Templates" element={<Templates/>}/>
      <Route path="/Library" element={<Library/>}/>
      <Route path="/Support" element={<Support/>}/>
      <Route path="/CompanyDetails" element={<Company/>}/>
      <Route path="/preview/:id" element={<Preview />} />
    </Routes>
  );
};

export default App;
