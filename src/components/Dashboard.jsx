import React from 'react';
import { Link, NavLink } from "react-router-dom";

function Dashboard() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',

        // backgroundColor: 'lightBlue',
      }}
    >
      <Link
        to="/"
        style={{}}
      >
        <div>
          H
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
         S
       </div>
      </Link>

      <Link
        to="/recommendations"
        style={{}}
      >
        G
      </Link>

    </div>
  )
}

export default Dashboard