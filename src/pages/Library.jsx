import React from 'react'
import { Outlet } from 'react-router-dom'

function Library() {
  return (
    <div
    style={{
      backgroundColor: 'purple',
      height: '100%',
      position: 'relative',
    }}
    >
      <div
        style={{
          backgroundColor: 'purple',
          // height: '100%',
          position: 'absolute',
          backgroundColor: 'grey',
          display: 'grid',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          overflowY: 'scroll',
          gridTemplateColumns: `repeat(4, 1fr)`,
          gap: '1rem',
          padding: '1rem',
        }}
      >
        <Outlet />
      </div>

    </div>
  )
}

export default Library