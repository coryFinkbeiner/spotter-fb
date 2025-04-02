import React from 'react'
import Seeds from './Seeds'
import { NavLink } from "react-router-dom"

function Topbar() {
  return (
    <div
      style={{
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1.8fr 1fr',
      }}
    >
      <div
        style={{
          backgroundColor: 'pink',
          padding: '.5rem'
        }}>
          <Seeds />

      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr'
        }}
      >
        <div
          style={{
            backgroundColor: 'red',
          }}
        > X
        </div>
        <NavLink
          to={'/Results'}
          style={{
            backgroundColor: 'yellow',
            textDecoration: 'none',
          }}
        > Get Results
        </NavLink>
        <div
          style={{
            backgroundColor: 'purple'
          }}
        > Queue
        </div>

        </div>
    </div>
  )
}

export default Topbar