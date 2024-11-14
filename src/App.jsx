import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss'
import RouteHandler from './router/router'
import './pageStyles.scss'
function App() {

  return (
    <>
      <RouteHandler />
    </>
  )
}

export default App
