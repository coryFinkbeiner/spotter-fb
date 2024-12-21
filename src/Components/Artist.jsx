import React from 'react'

function Artist({ artist, key }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: `3fr, 1fr`,
        position: 'relative',
        cursor: 'pointer',
      }}
    >

      <div
        style={{
          backgroundColor: 'darkgrey',
          height: '180px',
          display: 'flex',
          justifyContent: 'center', // Center horizontally
          alignItems: 'center', // Center vertically
        }}
      >
        <div
          style={{
            borderRadius: '100%',
            height: '160px',
            width: '160px',
            backgroundImage: `url(${artist.images[0]?.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        </div>
      </div>
      <div>
          {artist.name}</div>
      </div>
  )
}

export default Artist