import React, { useState, useEffect } from 'react';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';

function Collection({
  key,
  item,
}) {
  const { bank, setBank } = useData();
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
              backgroundColor: 'red',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
            }}
          >
            <div
              style={{
                backgroundColor: 'purple',
              }}
              onClick={() => {
                item.imageUrl = imageUrl
                setBank({...bank, one: item })
              }}
            ></div>
            <div
              style={{
                backgroundColor: 'black',
              }}
              onClick={() => {
                item.imageUrl = imageUrl
                setBank({...bank, two: item })
              }}
            ></div>
            <div
              style={{
                backgroundColor: 'darkGreen',
              }}
              onClick={() => {
                item.imageUrl = imageUrl
                setBank({...bank, three: item })
              }}
            ></div>
            <div
              style={{
                backgroundColor: 'darkOrange',
              }}
              onClick={() => {
                item.imageUrl = imageUrl
                setBank({...bank, four: item })
              }}
            ></div>
          </div>

        </>
      )}
    </div>
  )
}

export default Collection