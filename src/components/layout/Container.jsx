import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Bank from '../Bank';



function Container({ children }) {

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.97fr',
        height: '93vh',
        width: '32rem',
      }}
    >
      <div
        style={{
          backgroundColor: 'red',
        }}
      >Sidebar
      </div>

      <div
        style={{
          backgroundColor: 'blue',
          display: 'grid',
          gridTemplateRows: '10fr 1fr',
        }}
      >
        <div
          style={{
            backgroundColor: 'yellow',
          }}
        >outlet
        </div>

        <div
          style={{
            backgroundColor: 'purple',
          }}
        >Spotbar

        </div>

      </div>

    </div>
  );
}

export default Container