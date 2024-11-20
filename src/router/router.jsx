import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

function RouteHandler() {
  return (
    <Routes>
      <Route exact element={<Layout />}>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/contact" exact element={<Contact/>} />
      </Route>
    </Routes>
  )
}

export default RouteHandler