import React, { useState, useEffect } from 'react'

function Collection({
  key,
  item,
}) {

  const [isHovering, setIsHovering] = useState(false);


  const imageUrl = item.album && item.album.images && item.album.images[0]
    ? item.album.images[0].url
    : item.images && item.images[0]
      ? item.images[0].url
      : "https://i.scdn.co/image/ab67616d0000b2732ba0863533344c205a1e3669";


  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
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
      {isHovering && (
        <>
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '20%',
              // top: '0%',
              // left: '0%',
              backgroundColor: 'red',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
            }}
          >
            <div
              style={{
                backgroundColor: 'purple',
              }}
            ></div>
            <div
              style={{
                backgroundColor: 'black',
              }}
            ></div>
            <div
              style={{
                backgroundColor: 'darkGreen',
              }}
            ></div>
            <div
              style={{
                backgroundColor: 'darkOrange',
              }}
            ></div>
          </div>

        </>
      )}
    </div>
  )
}

export default Collection