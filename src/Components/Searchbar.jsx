
import React, { useState } from 'react';

function Searchbar() {
  const [ query, setQuery ] = useState('');


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
        >
          Artists
        </div>
        <div
          style={{
            backgroundColor: 'purple',
          }}
        >
          Songs
        </div>
        <div
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
            // tabIndex="0"
            style={{
              border: 'none',
              color: 'black',
              height: '70%',
              width: '90%'
            }}
          />
      </div>


    </div>
  )
}

export default Searchbar