import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Left from '../Left';
import Bank from '../Bank'

// all four here?

function Container({ children }) {


  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 9fr',
        height: '93vh',
        width: '30rem',
        // backgroundColor: 'darkOrange',
      }}
    >

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.41fr',
        }}
      >
        <Nav />
        <Bank />
      </div>

      <Outlet />

    </div>
  );
}

export default Container