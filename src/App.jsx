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



function App({code}) {

  return (
    <RouterProvider
      router={
        createBrowserRouter(createRoutesFromElements(
          <Route path="/" element={<Container />}>
            <Route index element={<Home />} />
            <Route path='search' element={<Search />} />
            <Route path='recommendations' element={<Recommendations />} />
          </Route>
        ))
      }
    />
  )

}

export default App
