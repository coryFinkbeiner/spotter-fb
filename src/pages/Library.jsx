import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

function Library() {
  const location = useLocation()
  const path = location.pathname
  const isListing = path === '/Home/Library' || path.startsWith('/Home/Library/My')

  if (isListing) {
    return (
      <div className="grid-auto-fill-160">
        <Outlet />
      </div>
    )
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Library
