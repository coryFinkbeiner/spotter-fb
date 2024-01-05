import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Seeds from '../components/Seeds';

function Recommendations({children}) {


  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 5.4fr',
      }}
    >

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2.5fr',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateRows: '1fr 1fr 1fr 1fr',
            }}
          >

            <NavLink to="/recommendations/PickArtist" style={{ textDecoration: 'none', color: 'white' }}>
              A
            </NavLink>
            <NavLink to="/recommendations/PickSong" style={{ textDecoration: 'none', color: 'white' }}>
              <div>S</div>
            </NavLink>

            <NavLink to="/recommendations/PickGenre" style={{ textDecoration: 'none', color: 'white' }}>
              <div>G</div>
            </NavLink>
            <NavLink to="/recommendations" style={{ textDecoration: 'none', color: 'white' }}>
              <div>S</div>
            </NavLink>
          </div>

        </div>
        <Seeds />
      </div>


      <Outlet />



    </div>
  )
}

export default Recommendations