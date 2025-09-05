import React from 'react'
import { NavLink } from "react-router-dom"

function Librarybar() {
  const linkClass = ({ isActive }) => `subnav-link${isActive ? ' active' : ''}`
  return (
    <div className="subnav">
      <NavLink to={'/Home/Library/MyAlbums'} className={linkClass}>My albums</NavLink>
      <NavLink to={'/Home/Library/MyPlaylists'} className={linkClass}>My playlists</NavLink>
    </div>
  )
}

export default Librarybar
