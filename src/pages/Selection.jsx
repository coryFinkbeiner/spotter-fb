import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Track from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/components/child/Track.jsx';


function Selection() {
  const location = useLocation();
  const { collection } = location.state;
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
        gridTemplateRows: '1fr 5.4fr',
      }}
    >

      {/* top */}
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
        >{collection.type}

        </div>
      </div>

      {/* render tracks */}
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
          {collection.tracks?.map((track, index) => (
            <Track
              key={index}
              track={track}
            />
          ))}
        </div>
      </div>
    </div>

  )
}

export default Selection

