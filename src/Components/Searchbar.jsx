import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';


function Searchbar() {
  const [ query, setQuery ] = useState('');
  const [ radio, setRadio ] = useState('artist');
  const [searchParams, setSearchParams] = useSearchParams();



  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setSearchParams({ q: query, type: radio });
    }
  };


  return (
    <div
      style={{
        backgroundColor: 'red',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr .9fr',
      }}
    >
      <div
        style={{
          backgroundColor: 'black',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        <div
          style={{
            backgroundColor: 'pink',
          }}
          onClick={() => setRadio('artist')}
        >
          Artists
        </div>
        <div
          onClick={() => setRadio('track')}
          style={{

            backgroundColor: 'purple',
          }}
        >
          Songs
        </div>
        <div
          onClick={() => setRadio('genre')}
          style={{

            backgroundColor: 'pink',
          }}
        >
          Genres
        </div>

      </div>
      <div
        style={{
          // backgroundColor: 'blue',

        }}
      >
        <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              border: 'none',
              color: 'black',
              height: '70%',
              width: '90%',

            }}
          />
      </div>


    </div>
  )
}

export default Searchbar