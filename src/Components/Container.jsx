import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'

function Container() {
  return (
    <div
      style={{
        backgroundColor: 'red',
        height: '50vh',
        width: '50vw',
      }}
    >Container</div>
  )
}

export default Container