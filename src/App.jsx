import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import React from 'react';
import './App.css';
import Container from './layout/Container';
import Home from './pages/Home';
import Search from './pages/Search';
import Recommendations from './pages/Recommendations';

import PickArtist from './pages/sub/PickArtist';
import PickSong from './pages/sub/PickSong';
import PickGenre from './pages/sub/PickGenre';
import Settings from './pages/sub/Settings';




function App({code}) {

  return (
    <RouterProvider
      router={
        createBrowserRouter(createRoutesFromElements(
          <Route path="/" element={<Container />}>
            <Route index element={<Home />} />
            <Route path='search' element={<Search />} />
            <Route path='recommendations' element={<Recommendations />}>
              <Route index element={<Settings />} />
              <Route path='PickArtist' element={<PickArtist />} />
              <Route path='PickSong' element={<PickSong />} />
              <Route path='PickGenre' element={<PickGenre />} />
            </Route>
          </Route>
        ))
      }
    />
  )

}

export default App
