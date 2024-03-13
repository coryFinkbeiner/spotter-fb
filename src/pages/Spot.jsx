import React from 'react';
import { useLocation } from 'react-router-dom';
import Track from '../components/child/Track';

function Spot() {
  const location = useLocation();
  const { tracks, color } = location.state;

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
            backgroundColor: color,
          }}
        >
          <div
            style={{
              backgroundSize: 'cover',
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
            {tracks.map((track, index) => (
                <Track
                  key={index}
                  track={track}
                  image={track.image}
                  name={track.name}
                  artistName={track.artists[0].name}
                  duration_ms={track.duration_ms}
                  albumName={track.albumName}
                />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Spot