import React, { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import getSearchResults from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/data/getSearchResults.jsx';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';

function PickArtist() {
  const [ seeds, setSeeds ] = useOutletContext();
  const [ query, setQuery ] = useState('');
  const { accessToken } = useData();
  const [isHovering, setIsHovering] = useState(false);

  const { results } = getSearchResults({
    accessToken: accessToken,
    query: query,
    type: 'artist',
  });

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 11fr',
      }}
    >
      <div
        style={{
          backgroundColor: 'black',
          display: 'grid',
          gridTemplateColumns: '1fr 6fr 1fr',
          borderRadius: '30px',
        }}
      >
        <input
          type="text"
          value={query}
          onChange={handleChange}
          tabIndex="0"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            outline: 'none',
          }}
        />
      </div>

      {/* render */}
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
            gridTemplateColumns: `repeat(2, 1fr)`,
            gap: '4px',
          }}
        >
          {results?.artists.items.map((item, index) => (

            <div
              style={{
                display: 'grid',
                gridTemplateRows: `3fr, 1fr`,
                position: 'relative',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => setSeeds([...seeds, item])}
            >
              {isHovering && (
                <>
                  <div
                    style={{
                      position: 'absolute',
                      left: '40%',
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      height: '100%',
                      width: '40%',
                      zIndex: 1,
                      backgroundColor: 'white',
                      opacity: .2,
                      fontWeight: 'bold'
                    }}
                  >
                    Seed this Artist
                  </div>
                </>
              )}
              <div
                style={{
                  backgroundColor: 'yellow',
                  height: '180px',
                  display: 'flex',
                  justifyContent: 'center', // Center horizontally
                  alignItems: 'center', // Center vertically
                }}
              >
                <div
                  style={{
                    borderRadius: '100%',
                    height: '160px',
                    width: '160px',
                    backgroundImage: `url(${item.images[0]?.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                </div>
              </div>
              <div>
                  {item.name}</div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PickArtist