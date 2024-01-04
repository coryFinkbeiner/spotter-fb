import React, { useState, useEffect } from 'react';
import axios from 'axios';

function getSearchResults({
  accessToken,
  query,
  type,
}) {
  const [ results, setResults ] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: 'https://api.spotify.com/v1/search',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            limit: 50,
            query,
            type,
          },
        });
        setResults(response.data)
      } catch (error) {
        console.log('API error', error);
      }
    })();
  }, [accessToken, query, type]);

  return {
    results
  }
}

export default getSearchResults