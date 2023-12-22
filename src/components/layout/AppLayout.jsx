import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar';

function AppLayout({ children }) {

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 5.6fr',
        height: '92vh',
        width: '40rem',
        backgroundColor: 'darkOrange',
      }}
    >
      <Topbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;