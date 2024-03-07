import React, { useState, useEffect } from 'react';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';
import { Link } from 'react-router-dom';

function Album({
  key,
  image,
  name,
  artistName,
  tracks,
  id,
}) {
  const {
    accessToken,
    spots, setSpots,
  } = useData();
  const [ isHovering, setIsHovering ] = useState(false);

  const [trackArray, setTrackArray] = useState(tracks);




  const handleClick = async () => {
    if (Array.isArray(tracks)) return
    try {
      const response = await fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Now you can do whatever you want with the fetched data
      setTrackArray(data.items)
      console.log({data})
    } catch (error) {
      console.error('Error fetching album tracks:', error);
    }
  };


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
          trackArray,
          image,
          name,
          artistName,
          tracks,
          id,
        }}
        onClick={handleClick}

      >
        <div
          style={{
            backgroundImage: `url(${image})`,
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
        {/* <div
          style={{
            backgroundColor: 'red',
          }}
          onClick={() => setSpots(prevSpots => ({
            ...spots,
            red: [...spots.red, ...item.album.tracks.items]
          }))}
        ></div>
        <div
          style={{
            backgroundColor: 'yellow',
          }}
          onClick={() => setSpots(prevSpots => ({
            ...spots,
            yellow: [...spots.yellow, ...item.album.tracks.items]
          }))}
        ></div>
        <div
          style={{
            backgroundColor: 'blue',
          }}
          onClick={() => setSpots(prevSpots => ({
            ...spots,
            blue: [...spots.blue, ...item.album.tracks.items]
          }))}
        ></div> */}
      </div>
    </div>
  )
}

export default Album;