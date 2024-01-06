import React from 'react';
import { useLocation } from 'react-router-dom';

function CollectionView() {
  const item = useLocation().state

  const imageUrl = item.album && item.album.images && item.album.images[0]
    ? item.album.images[0].url
    : item.images && item.images[0]
      ? item.images[0].url
      : "https://i.scdn.co/image/ab67616d0000b2732ba0863533344c205a1e3669";

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 5.4fr',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2.2fr',
        }}
      >
        <div
          style={{
            backgroundColor: 'green',

          }}
        >
          <div
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover', // Options: 'auto', 'contain', 'cover', or specific values like '50% 50%'
              backgroundPosition: 'center',
              height: '100%',
              width: '100%',
              position: 'relative',
              cursor: 'pointer',
            }}
          >
          </div>

        </div>

        <div
          style={{
            backgroundColor: 'blue',

          }}
        >

      </div>


      </div>
      <div
        style={{
          backgroundColor: 'red',

        }}
      >

      </div>

    </div>
  )
}

export default CollectionView