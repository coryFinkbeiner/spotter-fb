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
          }}
        >
          <Outletbar />

        </div>
        <div
          style={{
          }}>
            <Navbar />
        </div>

      </div>

      <div
        style={{
          backgroundColor: 'orange',
          height: '100%',
          padding: '1rem'
        }}
      >
        <Outlet />
      </div>

    </div>
  )
}

export default Home







