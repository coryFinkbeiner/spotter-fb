import React, { useState } from 'react';
import { useData } from '../DataProvider';
import Collection from './child/Collection';

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

        {/* Render Box */}
        <div
          style={{
            position: 'relative',
            padding: '2px',
            background: 'lightRed',
            height: '100%',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridGap: '2px',
              position: 'absolute',
              overflowY: 'scroll',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              padding: '2px',
              gridTemplateColumns: 'repeat(2, 1fr)',
            }}
          >
            {collectionData?.items.map((item, index) => (
              <Collection
                key={index}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
  )
}

export default Library