import React, { useState, useEffect } from 'react';
import { useData } from '../DataProvider';
import getSearchResults from '../data/getSearchResults';
import Collection from '../components/child/Collection';
import Track from '../components/child/Track';
import Artist from '../components/child/Artist';

function Search() {
  const { accessToken } = useData();
  const [ query, setQuery ] = useState('');
  const [ radio, setRadio ] = useState('album');
  const rows = radio === 'track' ? '1' : '4';

  const { results } = getSearchResults({
    accessToken: accessToken,
    query: query,
    type: radio,
  });

  const handleChange = (event) => {
    setQuery(event.target.value);
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
          gridTemplateRows: '1.3fr 1fr 1fr',

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
          <div>S</div>
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
          <div>X</div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
          }}
        >
          <div
            onClick={() => setRadio('album')}
          >Albums</div>
          <div
            onClick={() => setRadio('track')}
          >Songs</div>
          <div
            onClick={() => setRadio('artist')}
          >Artists</div>

        </div>
        <div> year range </div>
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
            results?.tracks?.items.map((track, index) => (
              <Track
                key={index}
                track={track}
              />
            ))
          }
          {radio === 'album' &&
            results?.albums?.items.map((item, index) => (
              <Collection
                key={index}
                item={item}
              />
            ))
          }
          {radio === 'artist' &&
            results?.artists?.items.map((item, index) => (
              <Artist
                key={index}
                item={item}
              />
            ))
          }
        </div>
      </div>
    </div>
  )


}

export default Search