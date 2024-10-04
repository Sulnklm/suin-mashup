import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleInfo  } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {

    return(
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img className="w-[8rem] lg:w-[10rem] lg:px-3 h-auto" src="./public/logo.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-4 lg:text-xl lg:space-x-5 space-y-5 lg:space-y-0 md:space-y-0">
            <NavDropdown title="Movies" id="basic-nav-dropdown">
              <div className="space-y-6 lg:m-5 lg:space-y-7 lg:text-xl">
                <NavDropdown.Item href="#action/3.1">Now Showing</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Coming Soon</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Top Rated</NavDropdown.Item>
              </div>
              
            </NavDropdown>
            <Nav.Link href="#home">Showtimes</Nav.Link>
            <Nav.Link href="#link">Events</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="hidden lg:block flex text-2xl space-x-[4rem]">
          <FontAwesomeIcon  icon={faUser} className="cursor-pointer"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faCircleInfo} className="cursor-pointer"></FontAwesomeIcon>
        </div>
      </Container>
    </Navbar>
    );
};

export default Header;
