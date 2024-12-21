import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
      }}
    >
      <NavLink
        to={'/Home/Search'}
        style={{
          backgroundColor: 'yellow',
          textDecoration: 'none',
        }}
      >
      </NavLink>
      <NavLink
        to={'/Home/Library'}
        style={{
          backgroundColor: 'white',
          textDecoration: 'none',
        }}
      >
      </NavLink>
      <NavLink
        to={'/Home/Settings'}
        style={{
          backgroundColor: 'yellow',
          textDecoration: 'none',
        }}
      >
      </NavLink>
    </div>
  )
}

export default Navbar