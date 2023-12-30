import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
// import Dashboard from '../components/Dashboard';


function MySpotify({ children }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.41fr',
      }}
    >

      <div
        style={{
          backgroundColor: 'brown',
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




        <div
          style={{
            backgroundColor: 'lightGrey',
          }}
        >
          L or R or S -Side
        </div>




      </div>
      <Outlet />
    </div>
  )
}

export default MySpotify