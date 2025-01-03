import React from 'react'
import { NavLink } from "react-router-dom"

function Librarybar() {
  return (
    <div
      style={{
        // backgroundColor: 'white',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      <NavLink
        to={'/Home/Library/MyAlbums'}
        style={{
          backgroundColor: 'yellow',
          textDecoration: 'none',
        }}
      > my albums
      </NavLink>
      <NavLink
        to={'/Home/Library/MyPlaylists'}
        style={{
          backgroundColor: 'white',
          textDecoration: 'none',
        }}
      > my playlists
      </NavLink>


    </div>
  )
}

export default Librarybar