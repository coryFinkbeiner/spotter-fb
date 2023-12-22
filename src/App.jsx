import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';


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
          </Route>
        ))
      }
    />
  )

}

export default App
