import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './Header.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.classList.remove('mobile-nav-active');
    }
  }, [location.pathname]);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const body = document.body;
    if (!isMenuOpen) {
      body.classList.add('mobile-nav-active');
    } else {
      body.classList.remove('mobile-nav-active');
    }
  };
  return (
    <header
      id="header"
      className={`header d-flex align-items-center ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

        <Link to="/" className="logo d-flex align-items-center">
          <img src="/assets/img/logo.svg" alt="" />
        </Link>

        <nav id="navmenu" className={`navmenu`}>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
          {
            !isMenuOpen ? <img className='mobile-nav-toggle d-xl-none' height={40} src='/assets/icons/menu.svg' onClick={handleMenu}/> : <i className={`mobile-nav-toggle d-xl-none bi ${!isMenuOpen ? "bi-list" : 'bi-x'}`} onClick={handleMenu}></i>
          }
          
        </nav>

      </div>
    </header>
  );
};

export default Header;