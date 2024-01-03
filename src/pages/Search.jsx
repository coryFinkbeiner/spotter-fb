import React, { useState, useEffect } from 'react';
import { useData } from '../DataProvider';
import getSearchResults from '../data/getSearchResults';

function Search() {
  const { accessToken } = useData();
  const [ query, setQuery ] = useState('');
  const [ radio, setRadio ] = useState('album');
  const [ focus, setFocus ] = useState(false);
  // const [ searchResults, setSearchResults ] = useState({});

  const searchResults = getSearchResults({
    accessToken: accessToken,
    query: query,
    type: radio,
  })

  console.log(searchResults)

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: 'rgb(18, 18, 18)',
        height: '100%',
        padding: '4px, 4px, 4px, 4px',
        marginTop: '10px',
        borderRadius: '8px',
      }}
    >
      {/* top container */}
      <div
        style={{
          margin: '6px',
          padding: '10px, 10px, 10px, 10px',
          height: '105px',
          borderRadius: '8px',
        }}
      >
        <div
          style={{
            height: '64px',
            margin: '4px, 4px, 4px, 4px',
            padding: '6px'
          }}
        >
          {/* Search Bar */}
          <div
            style={{
              borderRadius: '30px',
              width: '355px',
              height: '90%',
              display: 'flex',
              flexDirection: 'row',
              padding: '4px, 4px, 4px, 4px',
              backgroundColor: 'rgb(40, 40, 40)',
              border: focus ? '2px solid white' : 'none',
            }}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          >
            <div
              style={{
                width: '42px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

              }}
            >
              Search
            </div>
            <input
              type="text"
              value={query}
              onChange={handleChange}
              tabIndex="0"
              style={{
                background: 'transparent',
                width: '266px',
                border: 'none',
                color: 'white',
                outline: 'none',
              }}
            />
            <div
              style={{
                width: '42px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}

            >
              X
            </div>
          </div>

          {/* Radio buttons container */}
          <div
            style={{
              height: '100%',
              width: '100%',
              margin: '5px 0px 0px 0px',
              padding: '7px 4px 4px 4px',
              display: 'flex',
              flex: 'row'
            }}
          >
            <div
              style={{
                backgroundColor: radio === 'artist' ? 'white' : 'rgb(40, 40, 40)',
                height: '76%',
                width: '60px',
                padding: '0px 0px 0px 0px',
                margin: '0px 8px 7px 0px',
                borderRadius: '36px',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '14px',
                alignItems: 'center',
                cursor: 'pointer',
                color: radio === 'artist' ? 'black' : 'white'
              }}
              onClick={() => setRadio('artist')}
            >
              Artists
            </div>

            <div
              style={{
                backgroundColor: radio === 'track' ? 'white' : 'rgb(40, 40, 40)',
                height: '76%',
                width: '60px',
                padding: '0px 0px 0px, 0px',
                margin: '0px 8px 7px 0px',
                borderRadius: '36px',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '14px',
                alignItems: 'center',
                cursor: 'pointer',
                color: radio === 'track' ? 'black' : 'white'
              }}
              onClick={() => setRadio('track')}
            >
              Songs
            </div>

            <div
              style={{
                backgroundColor: radio === 'album' ? 'white' : 'rgb(40, 40, 40)',
                height: '76%',
                width: '60px',
                padding: '0px 0px 0px 0px',
                margin: '0px 0px 7px 0px',
                borderRadius: '36px',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '14px',
                alignItems: 'center',
                cursor: 'pointer',
                color: radio === 'album' ? 'black' : 'white'
              }}
              onClick={() => setRadio('album')}
            >
              Albums
            </div>
          </div>
        </div>
      </div>
      {/* bottom container */}
      <div
        style={{
          height: '100%',
          padding: '2px 2px 2px 2px',
          margin: '2px 2px 2px 2px'
        }}
      >
        {/* render container */}
        <div
          style={{
            height: '100%',
          }}
        >
          {/* {radio === 'track' &&
            <Tracks results={results}/>
          }
          {radio === 'album' &&
            <Albums results={results}/>
          }
          {radio === 'artist' &&
            <Artists results={results}/>
          } */}
        </div>
      </div>
    </div>
  );
}

export default Search