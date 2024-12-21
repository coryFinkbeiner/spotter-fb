import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Outletbar from '../Components/Outletbar'

function Home() {
  return (
    <div
      style={{
        backgroundColor: 'blue',
        height: '100%',
        display: 'grid',
        gridTemplateRows: '1fr 8.8fr',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          display: 'grid',
          gridTemplateColumns: '2.4fr 1fr',
        }}
      >
        <div
          style={{
            backgroundColor: 'purple',
            display: 'grid',
            gridTemplateColumns: '3fr 1fr',
          }}
        >
          <Outletbar />

        </div>
        <div
          style={{
            backgroundColor: 'black',
          }}>
            <Navbar />
        </div>

      </div>

      <div
        style={{
          backgroundColor: 'orange',
          height: '100%',
        }}
      >
        <Outlet />
      </div>

    </div>
  )
}

export default Home







