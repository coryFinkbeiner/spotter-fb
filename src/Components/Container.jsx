import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'

function Container() {
  return (
    <div className="app-shell">
      <div className="topbar">
        <div className="panel" style={{ padding: '8px' }}>
          <Topbar />
        </div>
        <div className="panel" />
      </div>

      <div className="content-scroll">
        <div className="content-scroll-inner">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Container
