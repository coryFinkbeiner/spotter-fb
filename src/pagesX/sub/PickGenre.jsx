import React, { useState, useEffect } from 'react';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';
import { useOutletContext } from "react-router-dom";

function PickGenre() {
  const [ seeds, setSeeds ] = useOutletContext();
  const { accessToken } = useData();
  const [ genres, setGenres ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        padding: '2px',
        height: '100%',
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
          gap: '2px',
        }}
      >
        {genres.map((genre, index) => (
          <div
            style={{
              display: 'inline-block',
              border: '1px solid black',
              cursor: 'pointer'
            }}
            onClick={() => setSeeds([...seeds, genre])}
          >{genre}</div>
        ))}
      </div>
    </div>
  )
}

export default PickGenre