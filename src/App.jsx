import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import useSpotifyAuth from './hooks/useSpotifyAuth';

function App({code}) {

  const accessToken = useSpotifyAuth(code);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: `https://api.spotify.com/v1/me/albums`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            limit: 10,
          },
        });
        console.log(response.data);
      } catch (error) {
        console.log('API error', error);
      }
    })();
  }, [accessToken]);


  return (
    <div>
      <button
        onClick={() => {
          axios
            .post('http://127.0.0.1:5001/spotify1-25293/us-central1/helloWorld')
            .then((res) => {
              console.log(res.data)
            })
            .catch((err) => {
              console.log('login err', err)
            });
        }}
      >Hello World</button>

      <div style={{color: 'white'}}>{accessToken}</div>
    </div>

  )
}

export default App
