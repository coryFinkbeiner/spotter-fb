import React, { useState } from 'react'

function Sidebar({ library }) {

  const { albums, playlists } = library;

  const [ radio, setRadio ] = useState(albums);

  return (
    <div
      style={{
        backgroundColor: 'green',
        display: 'grid',
        gridTemplateRows: '1fr 14.9fr',
      }}
    >
      <div
        style={{
          backgroundColor: 'red',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',

        }}
      >

        <div
          onClick={() => setRadio(albums)}
        >Albums</div>

        <div
          onClick={() => setRadio(playlists)}
        >Playlists</div>
      </div>
      <div
        style={{

        }}
      >
        render here
      </div>
    </div>
  )
}

export default Sidebar