import React, { useState } from 'react';
import Library from '../Library';
import Dashboard from '../Dashboard';

function Sidebar() {

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 5fr',
      }}
    >
      <Dashboard />
      <Library />
    </div>
  )
}

export default Sidebar