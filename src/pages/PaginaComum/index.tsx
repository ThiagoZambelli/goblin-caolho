import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function PaginaComum() {
  return (
    <div>
      <Nav />      
      <Outlet />
      <Footer />
    </div>
  )
}

export default PaginaComum