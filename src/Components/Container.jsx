import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'

function Container() {
  return (
    <div
      style={{
        height: '93vh',
        width: '65vw',
        display: 'grid',
        gridTemplateRows: '1fr 8.8fr',
        minWidth: '57rem',
        maxWidth: '57rem',
        // padding: '1rem'
      }}
    >
      <Topbar />
      <div
        style={{
          padding: '1rem'
        }}
      >
        <Outlet />
      </div>

    </div>
  )
}

export default Container