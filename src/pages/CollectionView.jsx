import React from 'react';
import { useLocation } from 'react-router-dom';
import Track from '../components/child/Track';
import { useData } from '../DataProvider';
import getPlaylistTracks from '../data/getPlaylistTracks';

function CollectionView() {
  const item = useLocation().state
  const { accessToken } = useData();

  let trackArray = [];

  // check if album
  if (item.album) trackArray = item.album.tracks.items;

  if (item.tracks) {
    trackArray = getPlaylistTracks(
      accessToken,
      item.id,
    )
  }

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
          position: 'relative',
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
              gridTemplateColumns: `repeat(1, 1fr)`,
            }}
          >

            {trackArray?.map((track, index) => (
              <Track
                key={index}
                track={track}
                imageUrl={imageUrl}
              />
            ))}

          </div>
        </div>

    </div>
  )
}

export default CollectionView