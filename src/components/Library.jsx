import React, { useState } from 'react'
import { useData } from '../DataProvider'

function Library() {
  const { albums, playlists } = useData().library;
  const [ radio, setRadio ] = useState('albums');
  const collectionData = radio === 'albums' ? albums : playlists;



  console.log({collectionData})

  return (
    <div
        style={{
          display: 'grid',
          gridTemplateRows: '1fr 14.9fr',
          backgroundColor: 'green',
          height: '100%'
        }}
      >
        <div
          style={{
            backgroundColor: 'pink',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',

          }}
        >

          <div
            onClick={() => setRadio('albums')}
          >Albums</div>

          <div
            onClick={() => setRadio('playlists')}
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

export default Library