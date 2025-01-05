import React, { createContext, useContext, useState, useEffect } from 'react';
const DataContext = createContext();
import useSpotifyAuth from './hooks/useSpotifyAuth';
import axios from 'axios';

const DataProvider = ({ code, children }) => {
  const accessToken = useSpotifyAuth(code);
  const [ seeds, setSeeds ] = useState([])
  const [ myAlbums, setMyAlbums ] = useState([])
  const [ myPlaylists, setMyPlaylists ] = useState([])


  useEffect(() => {
    (async () => {
      try {
        const albumResponse = await axios({
          method: 'GET',
          url: `https://api.spotify.com/v1/me/albums`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            limit: 50,
          },
        });
        setMyAlbums(albumResponse.data.items)

      } catch (error) {
        console.log('API error', error);
      }
    })();

  }, [accessToken]);

  useEffect(() => {
    (async () => {
      try {
        const albumResponse = await axios({
          method: 'GET',
          url: `https://api.spotify.com/v1/me/playlists`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            limit: 50,
          },
        });
        setMyPlaylists(albumResponse.data.items)

      } catch (error) {
        console.log('API error', error);
      }
    })();

  }, [accessToken]);



  const value = {
    accessToken,
    seeds, setSeeds,
    myAlbums,
    myPlaylists,
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