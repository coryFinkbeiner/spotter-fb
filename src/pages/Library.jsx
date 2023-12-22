import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import { useLoaderData } from "react-router-dom";
import { useData } from '../DataProvider'

function Library() {
  const library = useData();
  const [ radio, setRadio ] = useState('albums')

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
      }}
    >
      <Sidebar library={library}/>
      <Outlet />
    </div>
  )
}

export default Library