import React from 'react'
import Seeds from './Seeds'

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
        >
        </div>
        <div
          style={{
            backgroundColor: 'darkyellow'
          }}
        >
        </div>
        <div
          style={{
            backgroundColor: 'purple'
          }}
        >
        </div>

        </div>
    </div>
  )
}

export default Topbar