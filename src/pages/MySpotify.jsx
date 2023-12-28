import React from 'react';
import { Outlet } from 'react-router-dom';
import SpotifySidebar from '../components/SpotifySidebar'


function MySpotify({ children }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.41fr',
      }}
    >
      <SpotifySidebar />
      <Outlet />
    </div>
  )
}

export default MySpotify