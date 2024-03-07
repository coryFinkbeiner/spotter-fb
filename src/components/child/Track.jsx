import React, { useState }  from 'react';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';

function Track({
  key,
  track,
  image
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
        // backgroundColor: 'transparent',
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
              // width: '100%',
              height: '100%',
              width: '40%',
              zIndex: 1,

            }}
          >
            <div
              style={{
                backgroundColor: 'red',
                // height: '100%'
              }}
              onClick={() => setSpots(prevSpots => ({
                ...spots,
                red: [...spots.red, track]
              }))}
            ></div>
            <div
              style={{
                backgroundColor: 'yellow',
                // height: '100%'
              }}
              onClick={() => setSpots(prevSpots => ({
                ...spots,
                yellow: [...spots.yellow, track]
              }))}
            ></div>
            <div
              style={{
                backgroundColor: 'blue',
                // height: '100%'
              }}
              onClick={() => setSpots(prevSpots => ({
                ...spots,
                blue: [...spots.blue, track]
              }))}
            ></div>

          </div>
        </>
      )}


      <div>{key}</div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // height: '80%',
          // width: '80%',
        }}
      ></div>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '1.2fr 1fr',
        }}
      >
        {/* <div>{track.}</div>
        <div>{track.artistName}</div> */}
      </div>
      <div>dur</div>

    </div>
  )
}

export default Track