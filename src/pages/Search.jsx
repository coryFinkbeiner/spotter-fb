import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useData } from '../DataProvider';
import { useSearchParams } from 'react-router-dom';


function Search() {
  const [searchParams] = useSearchParams();
  const { accessToken } = useData();
  const [ results, setResults ] = useState([]);
  const query = searchParams.get('q');
  const type = searchParams.get('type');

  console.log({query, type})


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

  if (type === 'genre') {

  }


}, [ query, type ])





  return (
    <div
      style={{
        backgroundColor: 'grey',
        heigh: '100%',
      }}
    >Search</div>
  )
}

export default Search