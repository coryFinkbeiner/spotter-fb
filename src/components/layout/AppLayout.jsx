import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function AppLayout({ children }) {

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2.85fr',
        height: '93vh',
        width: '40rem',
        // backgroundColor: 'darkOrange',
      }}
    >

      <Sidebar />
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '7fr 1fr',
        }}
      >
        <Outlet />
        <div
          style={{
            backgroundColor: 'red'
          }}
        >Lowbar</div>
      </div>

    </div>
  );
}

export default AppLayout;