import React, { useState, useEffect } from 'react';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';
import { Link } from 'react-router-dom';

function Album({
  key,
  itemA,
}) {
  const {
    accessToken,
    spots, setSpots,
  } = useData();
  const [ isHovering, setIsHovering ] = useState(false);

  const tracks = [];
  for (const itemT of itemA.album.tracks.items) {
    const track = {
      image: itemA.album.images[0].url,
      albumName: itemA.album.name,
      ...itemT,
    }
    tracks.push(track)
  }

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
          itemA,
          tracks,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${itemA.album.images[0].url})`,
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