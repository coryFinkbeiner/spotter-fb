import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  const linkClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`
  return (
    <div className="navbar">
      <NavLink to={'/Home/Search'} className={linkClass} aria-label="Search" title="Search">
        🔎 Search
      </NavLink>
      <NavLink to={'/Home/Library'} className={linkClass} aria-label="Library" title="Library">
        📚 Library
      </NavLink>
      <NavLink to={'/Home/Settings'} className={linkClass} aria-label="Settings" title="Settings">
        ⚙️ Settings
      </NavLink>
    </div>
  )
}

export default Navbar
