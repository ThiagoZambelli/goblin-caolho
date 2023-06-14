import React from 'react'
import NavLithtleZ from './NavLithtleZ'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function PaginaComum() {
  return (
    <div>
      <NavLithtleZ />      
      <Outlet />
      <Footer />
    </div>
  )
}

export default PaginaComum