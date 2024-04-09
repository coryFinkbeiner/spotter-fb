import React, { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import getSearchResults from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/data/getSearchResults.jsx';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';

function PickSong() {
  const [ seeds, setSeeds ] = useOutletContext();
  const [ query, setQuery ] = useState('');
  const { accessToken } = useData();
  const [isHovering, setIsHovering] = useState(false);

  const { results } = getSearchResults({
    accessToken: accessToken,
    query: query,
    type: 'track',
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
            gridTemplateColumns: `repeat(1, 1fr)`,
            gap: '2px',
          }}
        >
          {results?.tracks.items.map((item, index) => (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.5fr 5fr 1.2fr',
                position: 'relative',
                cursor: 'pointer',
                height: '55px'
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
                    Seed this Song
                  </div>
                </>
              )}


              <div
                style={{ color: 'white'}}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${item.album.images[0]?.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '54px',
                  width: '50px',
                }}
              ></div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: '1.2fr 1fr',
                }}
              >
                <div>{item.name}</div>
                <div>{item.artists[0].name}</div>
              </div>
              <div>dur</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PickSong