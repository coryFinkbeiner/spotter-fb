import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Track from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/components/child/Track.jsx';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';

function Selection() {
  const location = useLocation();
  const {
    key,
    // tracks,
    // itemA,
    album,
  } = location.state;
  const {
    accessToken,
    spots, setSpots,
  } = useData();


  // const [ trackArray, setTrackArray ] = useState(tracks);

  // if (trackArray === null) {
  //   (async () => {
  //     try {
  //       const response = await fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
  //         method: 'GET',
  //         headers: {
  //           'Authorization': `Bearer ${accessToken}`
  //         }
  //       });
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setTrackArray(data.items);
  //       console.log({ data });
  //     } catch (error) {
  //       console.error('Error fetching album tracks:', error);
  //     }
  //   })();
  // }

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
            backgroundImage: `url(${album.image})`,
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
              display: 'grid',
              gridTemplateRows: '1.5fr 2fr 2fr',
            }}
          >
            <div>
              Album
            </div>
            <div>
              {album.name}
            </div>
            <div>
              {album.artists[0].name}
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
              onClick={() => setSpots(prevSpots => ({
                ...spots,
                red: [...spots.red, ...tracks]
              }))}
            ></div>
            <div
              style={{
                backgroundColor: 'yellow',
                borderRadius: '50%',
                opacity: .4,
              }}
              onClick={() => setSpots(prevSpots => ({
                ...spots,
                yellow: [...spots.yellow, ...tracks]
              }))}
            ></div>
            <div
              style={{
                backgroundColor: 'blue',
                borderRadius: '50%',
                opacity: .4,
              }}
              onClick={() => setSpots(prevSpots => ({
                ...spots,
                blue: [...spots.blue, ...tracks]
              }))}
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
          {/* {tracks?.map((track, index) => (
            <Track
              key={index}
              track={track}
            />
          ))} */}
        </div>
      </div>
    </div>

  )
}

export default Selection

