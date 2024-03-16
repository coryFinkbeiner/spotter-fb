import React, { useState }  from 'react';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';

function Track({
  key,
  track,
  // image,
  // name,
  // artistName,
  // duration_ms,
  // albumName,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const {
    spots, setSpots,
  } = useData();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.5fr 5fr 1.2fr',
        position: 'relative',
        cursor: 'pointer',
        height: '55px'
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >

      {isHovering && (
        <>
          <div
            style={{
              position: 'absolute',
              left: '40%',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              height: '100%',
              width: '40%',
              zIndex: 1,
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
                red: [...spots.red, track]
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
                yellow: [...spots.yellow, track]
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
                blue: [...spots.blue, track]
              }))}
            ></div>
          </div>
        </>
      )}

      <div
        style={{ color: 'white'}}
      ></div>
      <div
        style={{
          backgroundImage: `url(${track.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '54px',
          width: '50px',
        }}
      ></div>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '1.2fr 1fr',
        }}
      >
        <div>{track.name}</div>
        <div>{track.albumName}</div>
      </div>
      <div>dur</div>

    </div>
  )
}

export default Track