import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss'
import RouteHandler from './router/router'
import './pageStyles.scss'
import './responsive.scss'
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
