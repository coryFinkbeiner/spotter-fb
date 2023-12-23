import React from 'react'
import { Link, NavLink } from "react-router-dom"

function Dashboard() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 1fr 1fr',

        backgroundColor: 'orange',
      }}
    >
      <Link
        to="/"
        style={{}}
      >
       <div>
         Home
       </div>
      </Link>

      <Link
        to="/Search"
        style={{}}
      >
       <div
        style={{
          backgroundColor: 'grey',
          height: '100%',
        }}
       >
         Search
       </div>
      </Link>

      <Link
        to="/GetRecommendations"
        style={{}}
      >
        Get Recommendations
      </Link>

    </div>
  )
}

export default Dashboard