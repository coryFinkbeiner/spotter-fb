import React from 'react';

function SelectedAlbum() {
  return (
    <>
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
        >

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
          {/* {trackArray?.map((track, index) => (
            <Track
              key={index}
              track
              imageU
            />
          ))} */}
        </div>
      </div>

    </>

  )
}

export default SelectedAlbum

