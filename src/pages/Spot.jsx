import React from 'react';
import { useLocation } from 'react-router-dom';
import Track from '../components/child/Track';

function Spot() {
  const { state } = useLocation();

  // console.log({state})

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 5.4fr',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2.2fr',
        }}
      >
        <div
          style={{
            backgroundColor: 'green',
          }}
        >
          <div
            style={{
              // backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover', // Options: 'auto', 'contain', 'cover', or specific values like '50% 50%'
              backgroundPosition: 'center',
              height: '100%',
              width: '100%',
              position: 'relative',
              cursor: 'pointer',
            }}
          >
          </div>

        </div>

        <div
          style={{
            backgroundColor: 'blue',
          }}
        >
        </div>
      </div>
      <div
        style={{
          backgroundColor: 'red',
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
            {state?.spot.map((track, index) => {

              return (
                <Track
                  key={index}
                  data={track}
                  // imageUrl={}
                  // songName={}
                  // artistName={}
                  // duration={}
                />
              )
            })}
          </div>
        </div>
    </div>
  )
}

export default Spot