import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dash from "./Navbar";
import Header from './Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,NavDropdown} from "react-bootstrap";

function Nav() {
  return (
    <div>

  <Navbar bg="light" variant="light">
< Dash />


    <Navbar.Brand href="/">

      <img
        alt=""
        src="https://www.feba.co.in/static/media/logo.9f98b1b6.png"

        width="60"
        height="30"
      className="mainicon"
      />
    </Navbar.Brand>
    <Navbar bg="light">
    <Navbar.Brand><h2 className="feba">Feba</h2></Navbar.Brand>
  </Navbar>
  </Navbar>
    </div>
  );
}

export default Nav;
