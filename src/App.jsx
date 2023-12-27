import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import React from 'react';
import axios from 'axios';
import './App.css';
import Container from './components/layout/Container';
import Home from './pages/Home';
import Search from './pages/Search';
import GetRecommendations from './pages/GetRecommendations';
import MySpotify from './pages/MySpotify';
import Thread from './pages/Thread';



function App({code}) {

  return (
    <RouterProvider
      router={
        createBrowserRouter(createRoutesFromElements(
          <Route path="/" element={<Container />}>
            <Route index element={<Home />} />
            <Route path='/spotify' element={<MySpotify />} />
            <Route path='/thread' element={<Thread />} />
          </Route>
        ))
      }
    />
  )

}

export default App
