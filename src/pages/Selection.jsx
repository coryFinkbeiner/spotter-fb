import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Track from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/components/child/Track.jsx';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';

function Selection() {
  const location = useLocation();
  const {
    trackArray,
    image,
    name,
    artistName,
    tracks,
    id, } = location.state;
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
            backgroundImage: `url(${image})`,
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
              backgroundColor: 'white',
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
                red: [...spots.red, ...trackArray]
              }))}
            ></div>
            <div
              style={{
                backgroundColor: 'yellow',
              }}
              onClick={() => setSpots(prevSpots => ({
                ...spots,
                yellow: [...spots.yellow, ...trackArray]
              }))}
            ></div>
            <div
              style={{
                backgroundColor: 'blue',
              }}
              onClick={() => setSpots(prevSpots => ({
                ...spots,
                blue: [...spots.blue, ...trackArray]
              }))}
            ></div>


          </div>

        </div>
      </div>

      {/* render tracks */}
      <div
        style={{
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
          {/* {item.album.tracks.items.map((track, index) => (
            <Track
              key={index}
              track={track}
              image={item.album.images[0].url}
            />
          ))} */}
        </div>
      </div>
    </div>

  )
}

export default Selection

