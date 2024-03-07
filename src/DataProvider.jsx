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

  // useEffect(() => {
  //   if (!albums) return
  //   const newAlbums = [];

  //   for (const itemA of albums.items) {
  //     const album = {
  //       image: itemA.album.images[0].url,
  //       id: itemA.album.id,
  //       artistName: itemA.album.artists[0].name,
  //       name: itemA.album.name,
  //       type: 'album',
  //       tracks: [],
  //     };

  //       for (const itemT of itemA.album.tracks.items) {
  //         const track = {
  //           name: itemT.name,
  //           albumName: itemA.album.name,
  //           albumImage: itemA.album.images[0].url,
  //           artistName: itemT.artists[0].name,
  //           uri: itemT.uri,
  //         };
  //         album.tracks.push(track);
  //       }

  //       newAlbums.push(album);
  //     }

  //   }

  //   setMyAlbums(newAlbums)

  // }, [ accessToken, albums, playlists ])

  const value = {
    accessToken,
    albums,
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