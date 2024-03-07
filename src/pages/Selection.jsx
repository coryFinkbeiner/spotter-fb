import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Track from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/components/child/Track.jsx';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';

function Selection() {
  const location = useLocation();
  const { item } = location.state;
  const {
    spots, setSpots,
  } = useData();

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
          gridTemplateColumns: '1fr 1.85fr',
        }}
      >
        <div
          style={{
            backgroundImage: `url(${item.album.images[0].url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '3fr 1fr',
          }}
        >
          <div
            style={{
              backgroundColor: 'yellow',
            }}
          >

          </div>
          <div
            style={{
              backgroundColor: 'black',
              display: 'grid',
              gridTemplateRows: '1fr 1fr 1fr',
            }}
          >
            <div
              style={{
                backgroundColor: 'red',
              }}
              onClick={() => setSpots(prevSpots => ({
                ...spots,
                red: [...spots.red, ...item.album.tracks.items]
              }))}
            ></div>
            <div
              style={{
                backgroundColor: 'yellow',
              }}
              onClick={() => setSpots(prevSpots => ({
                ...spots,
                yellow: [...spots.yellow, ...item.album.tracks.items]
              }))}
            ></div>
            <div
              style={{
                backgroundColor: 'blue',
              }}
              onClick={() => setSpots(prevSpots => ({
                ...spots,
                blue: [...spots.blue, ...item.album.tracks.items]
              }))}
            ></div>


          </div>

        </div>
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
          {item.album.tracks.items.map((track, index) => (
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

export default Selection

