import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  const linkClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`
  return (
    <div className="navbar">
      <NavLink to={'/Home/Search'} className={linkClass} />
      <NavLink to={'/Home/Library'} className={linkClass} />
      <NavLink to={'/Home/Settings'} className={linkClass} />
    </div>
  )
}

export default Navbar
