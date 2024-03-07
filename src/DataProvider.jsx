import React, { createContext, useContext, useState, useEffect } from 'react';
const DataContext = createContext();
import useSpotifyAuth from './hooks/useSpotifyAuth';
import getLibrary from './data/getLibrary';
import getSearchResults from './data/getSearchResults';
import axios from 'axios';

const DataProvider = ({ code, children }) => {
  const accessToken = useSpotifyAuth(code);
  const { albums, playlists } = getLibrary(accessToken);
  const [ spots, setSpots ] = useState({
    red: [],
    yellow: [],
    blue: []
  });
  const [ myAlbums, setMyAlbums ] = useState([]);
  const [ myPlaylists, setMyPlaylists ] = useState([]);

  useEffect(() => {
    if (!albums) return
    const newAlbums = [];
    const newPlaylists = [];



    const fetchPlaylistTracks = async (playlistId) => {
      try {
        const response = await axios({
          method: 'GET',
          url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        return response.data.items;
      } catch (error) {
        console.log('API error', error);
        return [];
      }
    };



    for (const itemA of albums.items) {
      const album = {
        image: itemA.album.images[0].url,
        id: itemA.album.id,
        artistName: itemA.album.artists[0].name,
        name: itemA.album.name,
        type: 'album',
        tracks: [],
      };

      for (const itemT of itemA.album.tracks.items) {
        const track = {
          name: itemT.name,
          albumName: itemA.album.name,
          albumImage: itemA.album.images[0].url,
          artistName: itemT.artists[0].name,
          uri: itemT.uri,
        };
        album.tracks.push(track);
      }

      newAlbums.push(album);
    }

    for (const itemP of playlists.items) {
      const playlist = {
        image: itemP.images[0] ? itemP.images[0].url : 'https://i.scdn.co/image/ab67616d0000b2732529c50c11cb07f6f9e3ab29',
        id: itemP.id,
        owner: itemP.owner.display_name,
        type: 'playlist',
        // tracks: [],
      };

      // const X = fetchPlaylistTracks(itemP.id)
      // console.log({X})

      newPlaylists.push(playlist)

    }

    setMyPlaylists(newPlaylists)
    setMyAlbums(newAlbums)

  }, [ accessToken, albums, playlists ])



  const value = {
    accessToken,
    myAlbums, myPlaylists,
    spots, setSpots,
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