import React, { createContext, useContext, useState, useEffect } from 'react';
const DataContext = createContext();
import useSpotifyAuth from './hooks/useSpotifyAuth';
import getLibrary from './data/getLibrary';
import getSearchResults from './data/getSearchResults';
import getPlaylistTracks2 from './data/getPlaylistTracks';

const DataProvider = ({ code, children }) => {

  const accessToken = useSpotifyAuth(code);

  const { albums, playlists } = getLibrary(accessToken);
  const [ redSpot, setRedSpot ] = useState([]);
  const [ yellowSpot, setYellowSpot ] = useState([]);
  const [ blueSpot, setBlueSpot ] = useState([]);

  const [ myAlbums, setMyAlbums ] = useState([]);
  const [ myPlaylists, setMyPlaylists ] = useState([]);


  // console.log({albums})
  // console.log({playlists})


  useEffect(() => {
    if (!albums) return

    const newAlbums = [];
    const newPlaylists = [];

    for (const itemA of albums.items) {

      const album = {};

      album.image = itemA.album.images[0].url;
      album.id = itemA.album.id;
      album.artistName = itemA.album.artists[0].name;
      album.name = itemA.album.name;
      album.tracks = [];


      for (const itemT of itemA.album.tracks.items) {

        const track = {};
        track.name = itemT.name;
        track.albumImage = itemA.album.images[0].url;
        track.artistName = itemT.artists[0].name;
        track.uri = itemT.uri;

        album.tracks.push(track);

      }
      newAlbums.push(album);
    }


    // console.log({playlists})

    for (const itemP of playlists.items) {

      // console.log(itemP)

      const playlist = {};

      playlist.image = itemP.images[0].url;
      playlist.id = itemP.id;
      playlist.owner = itemP.owner.display_name;
      playlist.tracks = [];

      const { playlistTracks } = getPlaylistTracks2(accessToken, itemP.id)

      console.log({playlistTracks})

    }












    setMyAlbums(newAlbums)

  }, [ accessToken, albums, playlists ])



  const value = {
    accessToken,
    albums, playlists,
    redSpot, setRedSpot,
    yellowSpot, setYellowSpot,
    blueSpot, setBlueSpot,
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