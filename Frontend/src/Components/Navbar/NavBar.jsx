import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import userImg from "../img/user.png";
import { LuListTodo } from "react-icons/lu";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here
    navigate('/signin'); // Navigate to the signin page
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand
          href="/"
          className="text-2xl bg-gradient-to-r from-amber-700 to-purple-600 bg-clip-text text-transparent flex flex-row justify-center items-center space-x-1"
        >
            <LuListTodo className="text-blue-700" />
          <b>
            ToDo
          </b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-3.5 my-lg-0 space-x-3 font-bold text-slate-600"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/">Home</Link>
            <Link to="/todo">ToDo</Link>
            <Link to="/about">About Us</Link>
          </Nav>

          <Nav className="space-x-2 font-bold">

          <Link to="/signup">
          <Button variant="outline-primary" className="font-bold">Sign Up</Button>
          </Link>
          
          <Link to="/signin">
          <Button variant="outline-primary" className="font-bold">Sign In</Button>
          </Link>

          <Button variant="outline-danger" className="font-bold" onClick={handleLogout}>Log Out</Button>
            
            <img
              className="img-fluid w-14 h-10 cursor-pointer"
              src={userImg}
              alt="user"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
