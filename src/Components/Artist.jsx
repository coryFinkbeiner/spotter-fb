import React from 'react'
import { useData } from '../DataProvider'

function Artist({ artist, key }) {
  const { seeds, setSeeds } = useData()

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
          justifyContent: 'center',
          alignItems: 'center',
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
          onClick={() =>{
            if (seeds.length >= 5) return
            setSeeds(prevSeeds => [...prevSeeds, artist])
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