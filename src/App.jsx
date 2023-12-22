import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import Library from './pages/Library';
import Search from './pages/Search';
import Seeder from './pages/Seeder';


import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"


function App({code}) {

  return (
    <RouterProvider
      router={
        createBrowserRouter(createRoutesFromElements(
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='/library' element={<Library />} />
            <Route path='/search' element={<Search />} />
            <Route path='/seeder' element={<Seeder />} />

          </Route>
        ))
      }
    />
  )

}

export default App
