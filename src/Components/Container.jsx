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
        // minHeight: '93vh',
        // maxHeight: '93vh',
      }}
    >
      <Topbar />
      <div
        style={{
          // backgroundColor: 'blue',

        }}
      >
        <Outlet />
      </div>

    </div>
  )
}

export default Container