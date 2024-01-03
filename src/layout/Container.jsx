import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import LibrarySide from '../components/LibrarySide';
import Bank from '../components/Bank';

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
          display: 'grid',
          gridTemplateRows: '1fr 6fr',
        }}
      >
        <Nav />
        <div
          style={{
            backgroundColor: 'darkOrange',
          }}
        >
          <LibrarySide />
        </div>
      </div>

      <div
        style={{
          backgroundColor: 'blue',
          display: 'grid',
          gridTemplateRows: '10fr 1fr',
        }}
      >
        <Outlet />

        <Bank />

      </div>

    </div>
  );
}

export default Container