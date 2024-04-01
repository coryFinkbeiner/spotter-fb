import React, { useState, useEffect } from 'react';
import { useData } from '../DataProvider';
import getSearchResults from '../data/getSearchResults';
import Track from '../components/child/Track';
import Album from '../components/Album';

function Search() {
  const { accessToken } = useData();
  const [ query, setQuery ] = useState('');
  const [ radio, setRadio ] = useState('album');
  const [yearRange, setYearRange] = useState({ low: '', high: '' });
  const rows = radio === 'track' ? '1' : '4';

  const { results } = getSearchResults({
    accessToken: accessToken,
    query: query,
    type: radio,
  });

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleYearRangeChange = (event) => {
    const { name, value } = event.target;
    setYearRange(prevRange => ({
      ...prevRange,
      [name]: value,
    }));
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 6fr',
      }}
    >
      <div
        style={{
          backgroundColor: 'purple',
          display: 'grid',
          gridTemplateRows: '1fr 1.75fr',
        }}
      >
        <div
          style={{
            backgroundColor: 'black',
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
            }}
          >
            <div
              onClick={() => setRadio('album')}
            >Alums</div>
            <div
              onClick={() => setRadio('track')}
            >Songs</div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '3fr 1fr 3fr',
              backgroundColor: 'white',
              color: 'black',
            }}
          >
            <div>
              <input
                type="text"
                placeholder="0 A.D."
                name="low"
                value={yearRange.low}
                onChange={handleYearRangeChange}
              />
            </div>
            <div>to</div>
            <div>
              <input
                type="text"
                placeholder="2024"
                name="high"
                value={yearRange.high}
                onChange={handleYearRangeChange}
              />
            </div>
          </div>

        </div>
      </div>
      <div
        style={{
          position: 'relative',
          backgroundColor: 'lightRed',
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
            gridTemplateColumns: `repeat(${rows}, 1fr)`,
          }}
        >
          {radio === 'track' &&
            results?.tracks?.items.map((track, index) => {
              track.image = track.album.images[0].url;
              return (
                <Track
                  key={index}
                  track={track}
                />
              )
            }
          )}
          {radio === 'album' &&
            results?.albums?.items.map((item, index) => {
              const album = {
                image: item.images[0].url,
                ...item
              }
              return (
                <Album
                  key={index}
                  album={album}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Search