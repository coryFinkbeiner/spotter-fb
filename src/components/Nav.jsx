import React from 'react'

function Nav() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        backgroundColor: 'darkRed',
      }}
    >
      <div>Home NavLink</div>
      <div>Spotify logo</div>
      <div>Thread</div>
    </div>
  )
}

export default Nav