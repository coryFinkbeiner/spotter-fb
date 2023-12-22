// DataProvider.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {



  const value = {
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