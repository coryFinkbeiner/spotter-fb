import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import Search from './pages/Search';
import GetRecommendations from './pages/GetRecommendations';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";


function App({code}) {

  return (
    <RouterProvider
      router={
        createBrowserRouter(createRoutesFromElements(
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='/Search' element={<Search />} />
            <Route path='/GetRecommendations' element={<GetRecommendations />} />
          </Route>
        ))
      }
    />
  )

}

export default App
