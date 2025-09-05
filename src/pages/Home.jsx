import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Outletbar from '../Components/Outletbar'

function Home() {
  return (
    <div className="home-shell">
      <div className="home-header">
        <div className="panel outletbar-area">
          <Outletbar />
        </div>
        <div className="panel navbar-area">
          <Navbar />
        </div>
      </div>

      <div className="content-scroll">
        <div className="content-scroll-inner">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Home






