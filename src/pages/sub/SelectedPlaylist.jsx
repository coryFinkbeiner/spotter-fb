import React from 'react';
import { useLocation } from 'react-router-dom';
import Track from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/components/child/Track.jsx'

function SelectedPlaylist() {

  const location = useLocation();
  const { playlist } = location.state;
  // console.log({playlist})

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 5.4fr',
      }}
    >

      {/* top */}
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
        ></div>
      </div>

      {/* render tracks */}
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
          {playlist.tracks.map((track, index) => (
            <Track
              key={index}
              track={track}
            />
          ))}
        </div>
      </div>
    </div>

  )
}


export default SelectedPlaylist