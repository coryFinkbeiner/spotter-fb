import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import { useLoaderData } from "react-router-dom";
import { useData } from '../DataProvider'


// export function loader() {
//   const { getLibrary } = useData()
//   return getLibrary();
// }

function Library() {

  const library = useData();

  console.log(library)


  // const data = useLoaderData()
  // console.log(data)

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
      }}
    >
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Library