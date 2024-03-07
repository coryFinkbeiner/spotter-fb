import React, { useState, useEffect } from 'react';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';
import { Link } from 'react-router-dom';
import getPlaylistTracks from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/data/getPlaylistTracks.jsx';

function Collection({ collection }) {
  const {
    accessToken,
    spots, setSpots,
  } = useData();
  const [isHovering, setIsHovering] = useState(false);
  const { playlistTracks } = getPlaylistTracks(accessToken, collection.id)

  const [line1,  setLine1] = useState('');
  const [line2, setLine2] = useState('');

  useEffect(() => {
    if (collection.type === 'album') {
      // setLine1(collection.)

    }
    if (collection.type === 'playlist') {
      // setLine1(collection.)

      collection.tracks = [];

      for (const item of playlistTracks) {
        const track = {};
        track.name = item.track.name;
        track.albumName = item.track.album.name;
        track.artistName = item.track.artists[0].name;
        track.albumImage = item.track.album.images[0].url;
        track.uri = item.track.uri;

        collection.tracks.push(track);

      }
    }

  }, [accessToken])




  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '7fr 1fr',
      }}
    >
      <Link
        to={'selection'}
        state={{ collection }}
      >
        <div
          style={{
            backgroundImage: `url(${collection.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '85px',
            width: '85px',
            position: 'relative',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        ></div>
      </Link>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        <div
          style={{
            backgroundColor: 'red',
          }}
          onClick={() => setSpots(prevSpots => ({
            ...spots,
            red: [...spots.red, ...collection.tracks]
          }))}
        ></div>
        <div
          style={{
            backgroundColor: 'yellow',
          }}
          onClick={() => setSpots(prevSpots => ({
            ...spots,
            yellow: [...spots.yellow, ...collection.tracks]
          }))}
        ></div>
        <div
          style={{
            backgroundColor: 'blue',
          }}
          onClick={() => setSpots(prevSpots => ({
            ...spots,
            blue: [...spots.blue, ...collection.tracks]
          }))}
        ></div>
      </div>
    </div>
  );
}

export default Collection;
