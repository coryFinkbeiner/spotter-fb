import React, { useState, useEffect } from 'react';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';
import Album from './Album';

function LibrarySide() {
  const { albums } = useData();

  return (
    <>
      {/* box to render chosen collection items */}
      <div
        style={{
          position: 'relative',
          padding: '2px',
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
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          {albums?.items.map((item, index) => (
            <Album
              key={index}
              image={item.album.images[0].url}
              name={'test'}
              tracks={item.album.tracks.items}
              artistName={'test'}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default LibrarySide

