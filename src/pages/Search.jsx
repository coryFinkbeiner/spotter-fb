import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useData } from '../DataProvider';
import { useSearchParams } from 'react-router-dom';
import Artist from '../Components/Artist';
import Track from '../Components/Track';


function Search() {
  const [searchParams] = useSearchParams();
  const { accessToken } = useData();
  const [ results, setResults ] = useState([]);
  const [ rows, setRows ] = useState('');
  const query = searchParams.get('q');
  const type = searchParams.get('type');

  const getSearchResults = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: 'https://api.spotify.com/v1/search',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          limit: 50,
          q: query,
          type: type,
        },
      });
      setResults(response.data);
    } catch (error) {
      console.error('API error', error);
    }
  };

  useEffect(() => {

    if (type === 'track' || type === 'artist') getSearchResults()

    if (type === 'track') setRows('1')

    if (type === 'artist') setRows('4')

    if (type === 'genre') {

    }


  }, [ query, type ])



  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: 'lightRed',
        height: '100%',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'grey',
          display: 'grid',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          overflowY: 'scroll',
          gridTemplateColumns: `repeat(${rows}, 1fr)`,
          gap: '1rem',
        }}
      >


        {/* {type === 'track' &&
          results?.tracks?.items.map((track, index) => {
            return <Track track key={index} />
          }
        )} */}


        {type === 'track' &&
          results?.tracks?.items.map((track, index) => {
            return <Track track key={index} />
          }
        )}



        {type === 'artist' &&
          results?.artists?.items.map((artist, index) => {
            return <Artist artist key={index} />
          }
        )}


      </div>
    </div>
  )
}

export default Search