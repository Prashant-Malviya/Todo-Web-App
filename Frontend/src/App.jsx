import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInForm from "./Components/Auth/SignInForm";
import SignUpForm from "./Components/Auth/SignUpForm";
import NavBar from "./Components/Navbar/NavBar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import ToDo from "./Components/ToDo/ToDo";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/todo" element={<ToDo />} />

        <Route path="/about" element={<About />} />

        <Route path="/signin" element={<SignInForm />} />

        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
