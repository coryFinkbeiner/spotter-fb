import React, { useState, useEffect } from 'react';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';
import { Link } from 'react-router-dom';

function Collection({ collection }) {
  const {
    redSpot,
    setRedSpot,
    yellowSpot,
    setYellowSpot,
    blueSpot,
    setBlueSpot,
  } = useData();
  const [isHovering, setIsHovering] = useState(false);

  const [line1,  setLine1] = useState('');
  const [line2, setLine2] = useState('');

  useEffect(() => {
    if (collection.type === 'album') {
      // setLine1(collection.)
    }
    if (collection.type === 'playlist') {
      // setLine1(collection.)
    }

  }, [])

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '7fr 1fr',
      }}
    >
      <Link
        to={'selection'}
        state={{ collection }}
      >
        <div
          style={{
            backgroundImage: `url(${collection.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '85px',
            width: '85px',
            position: 'relative',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        ></div>
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
          onClick={() => handleSpotClick(collection.tracks)}
        ></div>
        <div
          style={{
            backgroundColor: 'yellow',
          }}
          onClick={() => handleSpotClick(collection.tracks)}
        ></div>
        <div
          style={{
            backgroundColor: 'blue',
          }}
          onClick={() => handleSpotClick(collection.tracks)}
        ></div>
      </div>
    </div>
  );
}

export default Collection;
