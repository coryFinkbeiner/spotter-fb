import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';

function Library() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
      }}
    >
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Library