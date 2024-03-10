import React, { useState, useEffect } from 'react';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';
import { Link } from 'react-router-dom';

function Album({
  key,
  image,
  albumName,
  artistName,
  tracks,
  id,
  data,
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
          data,
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
            backgroundSize: 'cover',
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
    </div>
  )
}

export default Album;