import React, { useState, useEffect } from 'react';
import { useData } from '../DataProvider';
import Collection from './child/Collection';

function LibrarySide() {
  const { albums, playlists } = useData().library;
  const [ radio, setRadio ] = useState('albums');

  const collectionData = radio === 'albums' ? albums : playlists;

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
          {collectionData?.items.map((item, index) => {

            let imageUrl = 'https://i.scdn.co/image/ab67616d0000b2732ba0863533344c205a1e3669';
            let type = '';
            let lineOne = 'lineOne';
            let lineTwo = 'lineTwo';

            if (item.album && item.album.images && item.album.images[0]) {
              imageUrl = item.album.images[0].url;
              type = 'album';
              lineOne = item.album.name;
              lineTwo = item.album.artists[0].name;
            } else if (item.images && item.images[0]) {
              imageUrl = item.images[0].url;
              type = 'playlist';
              lineOne = item.name;
              lineTwo = item.owner.display_name;
            }

            return (
              <Collection
                key={index}
                item={item}
                imageUrl={imageUrl}
                type={type}
                lineOne={lineOne}
                lineTwo={lineTwo}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default LibrarySide

