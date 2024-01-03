import React from 'react';
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 1fr 1fr',
        backgroundColor: 'darkRed',
      }}
    >
      <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <div>Home</div>
      </NavLink>
      <NavLink to="/search" style={{ textDecoration: 'none', color: 'white' }}>
        <div>Search</div>
      </NavLink>
      <NavLink to="/recommendations" style={{ textDecoration: 'none', color: 'white' }}>
        <div>Get Recs</div>
      </NavLink>
    </div>
  )
}

export default Nav