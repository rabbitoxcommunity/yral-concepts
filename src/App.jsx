import { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.scss'
import RouteHandler from './router/router'
import './pageStyles.scss'
import ScrollTop from './components/ScrollTop';
function App() {
  useEffect(() => {
    AOS.init({
      once: true, 
    });
  }, []);
  return (
    <>
    <ScrollTop/>
      <RouteHandler />
    </>
  )
}

export default App
