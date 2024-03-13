import React, { useState, useEffect } from 'react';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';

function Thread() {
  const {
    accessToken,
    spots, setSpots,
  } = useData();

  const [ newPlaylist, setNewPlaylist ] = useState({
    name: '',
    tracks: [],
  });



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
            // backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'white'
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
              display: 'grid',
              gridTemplateRows: '1.5fr 2fr 2fr',
            }}
          >
            <div>
              New Playlist
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter playlist name"
                value={newPlaylist.name}
                onChange={(e) => setNewPlaylist({ ...newPlaylist, name: e.target.value })}
              />
            </div>
            <div>
              <button
                onClick={() => {
                  // Handle create button click action here
                }}
              >
                Create
              </button>
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateRows: '1fr 1fr 1fr',
            }}
          >
            <div
              style={{
                backgroundColor: 'red',
                borderRadius: '50%',
                opacity: .4,
              }}
              // onClick={() => setSpots(prevSpots => ({
              //   ...spots,
              //   red: [...spots.red, ...trackArray]
              // }))}
            ></div>
            <div
              style={{
                backgroundColor: 'yellow',
                borderRadius: '50%',
                opacity: .4,
              }}
              // onClick={() => setSpots(prevSpots => ({
              //   ...spots,
              //   yellow: [...spots.yellow, ...trackArray]
              // }))}
            ></div>
            <div
              style={{
                backgroundColor: 'blue',
                borderRadius: '50%',
                opacity: .4,
              }}
              // onClick={() => setSpots(prevSpots => ({
              //   ...spots,
              //   blue: [...spots.blue, ...trackArray]
              // }))}
            ></div>
          </div>
        </div>
      </div>

      {/* render tracks */}
      <div
        style={{
          position: 'relative',
          margin: '4px 4px 4px 4px'
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
          {/* {trackArray?.map((track, index) => (
            <Track
              key={index}
              track={track}
              image={image}
              albumName
              artistName
              duration_ms={track.duration_ms}
              name
            />
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default Thread