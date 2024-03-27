import React, { createContext, useContext, useState, useEffect } from 'react';
const DataContext = createContext();
import useSpotifyAuth from './hooks/useSpotifyAuth';
import getLibrary from './data/getLibrary';
import axios from 'axios';

const DataProvider = ({ code, children }) => {
  const accessToken = useSpotifyAuth(code);
  const { albums } = getLibrary(accessToken);
  const [ spots, setSpots ] = useState({
    red: [],
    yellow: [],
    blue: []
  });
  const [ userId, setUserId ] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: 'https://api.spotify.com/v1/me',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserId(response.data.id)
      } catch (error) {
        // console.log('API error', error);
      }
    })();
  }, [ accessToken ])


  const value = {
    accessToken,
    userId,
    albums,
    spots, setSpots
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