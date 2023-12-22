import React, { createContext, useContext, useState, useEffect } from 'react';
const DataContext = createContext();
import useSpotifyAuth from './hooks/useSpotifyAuth';
import axios from 'axios';

const DataProvider = ({ code, children }) => {
  const accessToken = useSpotifyAuth(code);
  const [ albums, setAlbums ] = useState([]);
  const [ playlists, setPlaylists ]  = useState([]);

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
            limit: 50,
          },
        });
        setAlbums(response.data)
      } catch (error) {
        console.log('API error', error);
      }
    })();
  }, [accessToken]);

  const value = {
    library: {
      albums,
      playlists,
    }
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export { DataProvider, useData };