import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='yral__footer'>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-3">
            <div className="logo">
              <img src="/assets/img/logo.svg" alt="" />
              <p>we believe that every challenge presents an opportunity to innovate. Our mission is to simplify your life by providing practical, creative, and sustainable solutions to the problems you face daily.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <div className="footer__widgets">
                  <h4>Quick Links</h4>
                  <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>About Us</Link></li>
                    <li><Link to='/'>Products</Link></li>
                    <li><Link to='/'>Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer__widgets">
                  <h4>Products</h4>
                  <ul>
                    <li><Link to='/'>Hygia</Link></li>
                    <li><Link to='/'>Biosolve</Link></li>
                    <li><Link to='/'>Ekota</Link></li>
                    <li><Link to='/'>Izzah</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer__widgets">
                  <h4>Socials</h4>
                  <ul className='social'>
                    <li><Link to='/'><img src="/assets/icons/instagram.svg" alt="" /></Link></li>
                    <li><Link to='/'><img src="/assets/icons/facebook.svg" alt="" /></Link></li>
                    <li><Link to='/'><img src="/assets/icons/linkedin.svg" alt="" /></Link></li>
                    <li><Link to='/'><img src="/assets/icons/fwhatsapp.svg" alt="" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <p>Yral Concepts © {currentYear} All rights reserved</p>
        </div>
      </div>
    </div>
  )
}
