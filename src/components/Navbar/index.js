import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "./logo.png"; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white">
        <img src={logo} alt="logo" className="app-logo"/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Employee Directory <span className="sr-only">(current)</span></a>
            {/* <Link></Link> */}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Employee</a>
            {/* <Link></Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;