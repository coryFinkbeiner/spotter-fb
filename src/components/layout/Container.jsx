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
        gridTemplateColumns: '1fr 1fr',
        height: '93vh',
        width: '40rem',
        // backgroundColor: 'darkOrange',
      }}
    >

      <div
        style={{
          display: 'grid',
          gridTemplateRows: '1fr 9fr',
        }}
      >
        <Nav />
        <Left />

      </div>


      <div
        style={{
          display: 'grid',
          gridTemplateRows: '7fr 1fr',
        }}
      >
        <Outlet />
        <Bank />
      </div>

    </div>
  );
}

export default Container