import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate
} from "react-router-dom";
import React from 'react';
import './App.css';


import Container from './Components/Container';

import Home from './Pages/Home';
import Library from './Pages/Library';
import Results from './Pages/Results';
import Search from './Pages/Search';
import Settings from './Pages/Settings';

import Artists from './SubPages/Artists';
import Genres from './SubPages/Genres';
import MyAlbums from './SubPages/MyAlbums';
import MyPlaylists from './SubPages/MyPlaylists';
import Songs from './SubPages/Songs';

function App({code}) {
  return (
    <RouterProvider
      router={
        createBrowserRouter(createRoutesFromElements(

          <Route path="/" element={<Container />}>

            <Route path='Home' element={<Home />}>
              <Route index element={<Settings />} />

              <Route path='Library' element={<Library />}>
                <Route path='MyAlbums' element={<MyAlbums />} />
                <Route path='MyPlaylists' element={<MyPlaylists />} />
              </Route>

              <Route path='Search' element={<Search />}>
                <Route path='Artists' element={<Artists />} />
                <Route path='Songs' element={<Songs />} />
                <Route path='Genres' element={<Genres />} />
              </Route>
            </Route>

            <Route path='Results' element={<Results />} />

            <Route index element={<Navigate to="/Home" />} />

          </Route>

        ))
      }
    />
  )
}

export default App
