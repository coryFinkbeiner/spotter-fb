import React, { useState, useEffect } from 'react';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';
import { Link } from 'react-router-dom';

function Album({
  key,
  album
}) {
  const {
    accessToken,
    redSpot, setRedSpot,
    yellowSpot, setYellowSpot,
    blueSpot, setBlueSpot,
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
        to={'album'}
        state={{album}}
      >
        <div
          style={{
            backgroundImage: `url(${album.image})`,
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
            // item.imageUrl = imageUrl
            setRedSpot([...redSpot, ...album.tracks])
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'yellow',
          }}
          onClick={() => {
            // item.imageUrl = imageUrl
            setYellowSpot([...yellowSpot, ...album.tracks])
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'blue',
          }}
          onClick={() => {
            // item.imageUrl = imageUrl
            setBlueSpot([...blueSpot, ...album.tracks])
          }}
        ></div>




      </div>
    </div>
  )
}

export default Album;