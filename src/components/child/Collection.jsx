import React, { useState, useEffect } from 'react';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';
import { Link } from 'react-router-dom';

function Collection({
  key,
  item,
  imageUrl,
  type,
  lineOne,
  lineTwo,
}) {
  const { bank, setBank } = useData();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '7fr 1fr',
      }}
    >

      <Link
        to={'collection'}
        state={item}
      >
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
        </div>
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
          onClick={() => {
            item.imageUrl = imageUrl
            setBank({...bank, red: item })
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'yellow',
          }}
          onClick={() => {
            item.imageUrl = imageUrl
            setBank({...bank, yellow: item })
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'blue',
          }}
          onClick={() => {
            item.imageUrl = imageUrl
            setBank({...bank, blue: item })
          }}
        ></div>

      </div>

    </div>
  )
}

export default Collection