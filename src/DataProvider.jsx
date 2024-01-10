import React, { createContext, useContext, useState, useEffect } from 'react';
const DataContext = createContext();
import useSpotifyAuth from './hooks/useSpotifyAuth';
import getLibrary from './data/getLibrary';
import getSearchResults from './data/getSearchResults';

const DataProvider = ({ code, children }) => {
  const accessToken = useSpotifyAuth(code);
  const { albums, playlists } = getLibrary(accessToken);
  const [ bank, setBank ] = useState({
    red: [],
    yellow: [],
    blue: [],
  })



  const value = {
    accessToken,
    library: { albums, playlists, },
    bank, setBank,
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