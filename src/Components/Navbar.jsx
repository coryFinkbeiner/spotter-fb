import React from 'react'

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
      }}
    >
      <div
        style={{
          backgroundColor: 'yellow',
        }}
      >
      </div>
      <div
        style={{
          backgroundColor: 'white',
        }}
      >
      </div>
      <div
        style={{
          backgroundColor: 'black',
        }}
      >
      </div>

    </div>
  )
}

export default Navbar