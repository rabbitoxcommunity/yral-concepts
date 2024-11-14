import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'

function RouteHandler() {
  return (
    <Routes>
      <Route exact element={<Layout />}>
        <Route path="/" exact element={<Home/>} />
      </Route>
    </Routes>
  )
}

export default RouteHandler