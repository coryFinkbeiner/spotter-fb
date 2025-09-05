import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'

function Container() {
  return (
    <div className="app-shell">
      <div className="panel" style={{ padding: '8px' }}>
        <Topbar />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Container
