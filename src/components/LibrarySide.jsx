import React, { useState, useEffect } from 'react';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';
import Collection from './Collection';

function LibrarySide() {
  const { myAlbums, myPlaylists } = useData();
  const [ radio, setRadio ] = useState('albums');
  const [ collections, setCollections ] = useState([]);

  useEffect(() => {
    if (radio === 'albums') setCollections(myAlbums);
    if (radio === 'playlists') setCollections(myPlaylists);
  }, [ radio ])

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
          {collections?.map((collection, index) => (
            <Collection
              key={index}
              collection={collection}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default LibrarySide

