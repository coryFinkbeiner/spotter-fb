import React from 'react'
import { Link, NavLink } from "react-router-dom"


function Topbar() {

  return (
    <div
      style={{
        backgroundColor: 'darkBlue',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 3fr',

      }}
    >
      <NavLink
        to="/library"
        style={{}}
      >
       Library
      </NavLink>

      <NavLink
        to="/search"
        style={{}}
      >
       Search
      </NavLink>

      <NavLink
        to="/seeder"
        style={{}}
      >
       Seeder
      </NavLink>

      <div>
        Bank
      </div>

    </div>
  )
}

export default Topbar;