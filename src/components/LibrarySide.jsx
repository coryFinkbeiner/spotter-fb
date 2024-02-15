import React, { useState, useEffect } from 'react';
import { useData } from '../DataProvider';
import SidePlaylists from './child/SidePlaylists';
import SideAlbums from './child/SideAlbums';

function LibrarySide() {
  const { albums, playlists } = useData().library;
  const [ radio, setRadio ] = useState('albums');

  return (
    <>
      {/* radio buttons */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        <div
          onClick={() => setRadio('albums')}
        >Albums</div>
        <div
          onClick={() => setRadio('playlists')}
        >Playlists</div>
      </div>
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

        {radio === 'playlists' ? <SidePlaylists playlists={playlists}/> : <SideAlbums albums={albums}/>}

        </div>
      </div>
    </>
  )
}

export default LibrarySide

