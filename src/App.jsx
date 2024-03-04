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
import Spot from './pages/Spot';
import Thread from './pages/Thread';
import SelectedAlbum from './pages/sub/SelectedAlbum';
import SelectedPlaylist from './pages/sub/SelectedPlaylist';
import SelectedArtist from './pages/sub/SelectedArtist';
import Selection from './layout/Selection';


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

            <Route path='spot' element={<Spot />} />

            <Route path='thread' element={<Thread />} />


            <Route path='album' element={<SelectedAlbum />} />
            <Route path='playlist' element={<SelectedPlaylist />} />
            <Route path='artist' element={<SelectedArtist />} />


          </Route>
        ))
      }
    />
  )
}

export default App
