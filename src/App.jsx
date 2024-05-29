import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInForm from './Components/SignInForm';
import SignUpForm from './Components/SignUpForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/" element={<SignInForm />} />
      </Routes>
    </Router>
  );
};

export default App;
