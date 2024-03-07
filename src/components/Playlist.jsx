import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getPlaylistTracks from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/data/getPlaylistTracks.jsx';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';

function Playlist({
  key,
  playlist,
}) {
  const {
    accessToken,
    redSpot, setRedSpot,
    yellowSpot, setYellowSpot,
    blueSpot, setBlueSpot,
  } = useData();
  const [ isHovering, setIsHovering ] = useState(false);
  const { playlistTracks } = getPlaylistTracks(accessToken, playlist.id)

  playlist.tracks = [];

  for (const item of playlistTracks) {
    const track = {};
    track.name = item.track.name;
    track.albumName = item.track.album.name;
    track.artistName = item.track.artists[0].name;
    track.albumImage = item.track.album.images[0].url;
    track.uri = item.track.uri;

    playlist.tracks.push(track);
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '7fr 1fr',
      }}
    >
      <Link
        to={'playlist'}
        state={{playlist}}
      >
        <div
          style={{
            backgroundImage: `url(${playlist.image})`,
            backgroundSize: 'cover', // Options: 'auto', 'contain', 'cover', or specific values like '50% 50%'
            backgroundPosition: 'center',
            height: '85px',
            width: '85px',
            position: 'relative',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
        </div>
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
          onClick={() => {
            setRedSpot([...redSpot, ...playlist.tracks])
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'yellow',
          }}
          onClick={() => {
            setYellowSpot([...yellowSpot, ...playlist.tracks])
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'blue',
          }}
          onClick={() => {
            setBlueSpot([...blueSpot, ...playlist.tracks])
          }}
        ></div>
      </div>
    </div>
  )
}

export default Playlist;