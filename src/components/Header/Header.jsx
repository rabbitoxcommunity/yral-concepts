import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <Link to="/" className="logo d-flex align-items-center">
      <img src="/assets/img/logo.svg" alt="" />
      </Link>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li className="dropdown"><a href="#"><span>Products</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><NavLink to="/">Dropdown 1</NavLink></li>
              <li><NavLink to="/">Dropdown 2</NavLink></li>
              <li><NavLink to="/">Dropdown 3</NavLink></li>
              <li><NavLink to="/">Dropdown 4</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

    </div>
  </header>
  );
};

export default Header;