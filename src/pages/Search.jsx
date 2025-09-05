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
    console.log({accessToken})
    if (!accessToken) {
      console.error('No access token available');
      return;
    }
    
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
      if (error.response?.status === 401) {
        console.error('Authentication failed - token may be expired');
      }
    }
  };

  useEffect(() => {

    if (type === 'track' || type === 'artist') getSearchResults()

    if (type === 'track') setRows('1')

    if (type === 'artist') setRows('4')

    if (type === 'genre') {

    }

  }, [ query, type, accessToken ])


  return (
    <div>
      <div className={type === 'artist' ? 'grid-auto-fill-180' : ''}>
        {type === 'track' && results?.tracks?.items.map((track, index) => (
          <Track track={track} index={index} key={index} />
        ))}

        {type === 'artist' && results?.artists?.items.map((artist, index) => (
          <Artist artist={artist} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Search
