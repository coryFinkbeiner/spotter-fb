import React from 'react';
import { NavLink } from "react-router-dom";
import Library from '../Library';

function SpotifySidebar() {
  return (
    <div
      style={{
        backgroundColor: 'green',
        display: 'grid',
        gridTemplateRows: '1fr 12fr',
      }}
    >
      <div
        style={{
          backgroundColor: 'black',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >

        <NavLink to="/spotify" style={{ textDecoration: 'none', color: 'white' }}>
          <div>Home</div>
         </NavLink>
        <NavLink to="/spotify/recommendations" style={{ textDecoration: 'none', color: 'white' }}>
          <div>Get Rec</div>
        </NavLink>
        <NavLink to="/spotify/search" style={{ textDecoration: 'none', color: 'white' }}>
          <div>Search</div>
        </NavLink>

      </div>

      <Library />
    </div>
  )
}

export default SpotifySidebar