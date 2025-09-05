import React from 'react'
import { Outlet } from 'react-router-dom'

function Library() {
  return (
    <div className="grid-auto-fill-160">
      <Outlet />
    </div>
  )
}

export default Library
