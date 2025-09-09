import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Outletbar from '../Components/Outletbar'

function Home() {
  return (
    <div className="home-shell" style={{ height: '100%', overflow: 'hidden' }}>
      <div className="home-header">
        <div className="panel outletbar-area">
          <Outletbar />
        </div>
        <div className="panel navbar-area">
          <Navbar />
        </div>
      </div>

      <div className="content-scroll" style={{ height: 'calc(100% - 20px)', overflow: 'hidden' }}>
        <div className="content-scroll-inner">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Home






