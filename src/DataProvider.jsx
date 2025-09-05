import React, { createContext, useContext, useState, useEffect } from 'react';
const DataContext = createContext();
import useSpotifyAuth from './hooks/useSpotifyAuth';
import axios from 'axios';

const DataProvider = ({ code, children }) => {
  const accessToken = useSpotifyAuth(code);
  // console.log(accessToken)
  const [ seeds, setSeeds ] = useState([])
  const [ myAlbums, setMyAlbums ] = useState([])
  const [ myPlaylists, setMyPlaylists ] = useState([])
  const [ trackAmount, setTrackAmount ] = useState(20)
  const [ mySettings, setMySettings ] = useState({
    acousticness: { min: 0, max: 100, target: undefined },
    danceability: { min: 0, max: 100, target: undefined },
    duration: { min: undefined, max: undefined, target: undefined },
    energy: { min: 0, max: 100, target: undefined },
    instrumentalness: { min: 0, max: 100, target: undefined },
    key: { min: 0, max: 11, target: undefined },
    liveness: { min: 0, max: 100, target: undefined },
    loudness: { min: 0, max: 100, target: undefined },
    mode: { min: 0, max: 100, target: undefined },
    popularity: { min: 0, max: 100, target: undefined },
    speechiness: { min: 0, max: 100, target: undefined },
    tempo: { min: undefined, max: undefined, target: undefined },
    timeSignature: { min: 0, max: 11, target: undefined },
    valence: { min: 0, max: 100, target: undefined }
  })



  useEffect(() => {
    if (!accessToken) return;
    
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
        console.log({albumResponse})
        setMyAlbums(albumResponse.data.items)
        console.log('Albums loaded:', albumResponse.data.items.length);
      } catch (error) {
        console.log('Albums API error:', error);
      }
    })();
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    
    (async () => {
      try {
        const playlistResponse = await axios({
          method: 'GET',
          url: `https://api.spotify.com/v1/me/playlists`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            limit: 50,
          },
        });
        console.log({playlistResponse})
        setMyPlaylists(playlistResponse.data.items)
        console.log('Playlists loaded:', playlistResponse.data.items.length);
      } catch (error) {
        console.log('Playlists API error:', error);
      }
    })();
  }, [accessToken]);

  console.log({myAlbums})

  const value = {
    accessToken,
    seeds, setSeeds,
    myAlbums,
    myPlaylists,
    trackAmount, setTrackAmount,
    mySettings, setMySettings,

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