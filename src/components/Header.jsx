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
          <Nav className="me-auto text-xl lg:space-x-5">
            <NavDropdown title="Movies" id="basic-nav-dropdown">
              <div className="lg:p-2" >
                <NavDropdown.Item className="lg:pb-3" href="#action/3.1">Now Showing</NavDropdown.Item>
                <NavDropdown.Item className="lg:pb-3" href="#action/3.2">Coming Soon</NavDropdown.Item>
                <NavDropdown.Item className="" href="#action/3.3">Top Rated</NavDropdown.Item>
              </div>
              
            </NavDropdown>
            <Nav.Link href="#home">Showtimes</Nav.Link>
            <Nav.Link href="#link">Events</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;
