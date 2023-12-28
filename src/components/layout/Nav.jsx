import React from 'react';
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        backgroundColor: 'darkRed',
      }}
    >

      <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <div>Home NavLink</div>
      </NavLink>
      <NavLink to="/spotify" style={{ textDecoration: 'none', color: 'white' }}>
        <div>Spotify logo</div>
      </NavLink>
      <NavLink to="/thread" style={{ textDecoration: 'none', color: 'white' }}>
        <div>Thread</div>
      </NavLink>

    </div>
  )
}

export default Nav