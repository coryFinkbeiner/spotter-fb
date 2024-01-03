import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import React from 'react';
import './App.css';
import Container from './components/layout/Container';
import Home from './pages/Home';
import Search from './pages/sub/Search';
import Recommendations from './pages/sub/Recommendations';
import MySpotify from './pages/MySpotify';
import Thread from './pages/Thread';
import SpotifyHome from './pages/sub/SpotifyHome';

import Library from './pages/Library';


function App({code}) {

  return (
    <RouterProvider
      router={
        createBrowserRouter(createRoutesFromElements(
          <Route path="/" element={<Container />}>

          </Route>
        ))
      }
    />
  )

}

export default App
