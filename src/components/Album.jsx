import React, { useState, useEffect } from 'react';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';
import { Link } from 'react-router-dom';

function Album({
  key,
  image,
  name,
  artistName,
  tracks,
  id,
}) {
  const {
    accessToken,
    spots, setSpots,
  } = useData();
  const [ isHovering, setIsHovering ] = useState(false);



  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '7fr 1fr',
      }}
    >

      <Link
        to={'/selection'}
        state={{
          key,
          image,
          name,
          artistName,
          tracks,
          id,
        }}
      >

        <div
          style={{
            backgroundImage: `url(${image})`,
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
        {/* <div
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
        ></div> */}
      </div>
    </div>
  )
}

export default Album;