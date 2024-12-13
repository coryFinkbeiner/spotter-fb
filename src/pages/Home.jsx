import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

function Home() {
  return (
    <div
    style={{
      backgroundColor: 'blue',
      height: '100%',
      position: 'relative',

      // display: 'flex',
      // flexDirection: 'column',
    }}
    >
      <div
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          height: '5.3rem',
          width: '13.8rem',

        }}
      >
        <Navbar />
      </div>

      <div
        style={{
          backgroundColor: 'brown',
          height: '100%',
        }}
      >
        {/* <Outlet /> */}
      </div>

    </div>
  )
}

export default Home