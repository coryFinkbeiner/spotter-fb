import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'

function Container() {
  return (
    <div className="app-shell">
      <div className="panel" style={{ padding: '8px' }}>
        <Topbar />
      </div>

      <div style={{ height: 'calc(100vh - 64px - 32px)', overflow: 'hidden' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default Container
