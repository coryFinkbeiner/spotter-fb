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

      <div
        style={{
          display: 'grid',
          gridTemplateRows: '1fr 14.9fr',
          backgroundColor: 'green',
        }}
      >
        <div>Library</div>
        <div
          style={{
            backgroundColor: 'pink',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',

          }}
        >

          <div
            // onClick={() => setRadio(albums)}
          >Albums</div>

          <div
            // onClick={() => setRadio(playlists)}
          >Playlists</div>
        </div>
        <div
          style={{

          }}
        >
          render here
        </div>
      </div>
      </div>
  )
}

export default Sidebar