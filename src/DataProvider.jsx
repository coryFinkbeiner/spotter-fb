import React, { createContext, useContext, useState, useEffect } from 'react';
const DataContext = createContext();
import useSpotifyAuth from './hooks/useSpotifyAuth';
import getLibrary from './data/getLibrary';

const DataProvider = ({ code, children }) => {
  const accessToken = useSpotifyAuth(code);
  const { albums, playlists } = getLibrary(accessToken);

  const [ bank, setBank ] = useState({
    one: null,
    two: null,
    three: null,
    four: null,
  })

  const value = {
    accessToken,
    library: {
      albums,
      playlists,
    },
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