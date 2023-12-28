import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Bank from '../Bank';



function Container({ children }) {

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 9fr',
        height: '93vh',
        width: '30rem',
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