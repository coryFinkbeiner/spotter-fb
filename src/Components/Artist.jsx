import React from 'react'
import { useData } from '../DataProvider'

function Artist({ artist }) {
  const { seeds, setSeeds } = useData()

  return (
    <div className="card" style={{ cursor: 'pointer' }}>
      <div style={{ padding: '16px', display: 'grid', placeItems: 'center' }}>
        <div
          className="seed-artist"
          style={{ height: 160, width: 160, backgroundImage: `url(${artist.images[0]?.url})` }}
          onClick={() => { if (seeds.length < 5) setSeeds(prev => [...prev, artist]) }}
        />
      </div>
      <div className="card-body truncate">{artist.name}</div>
    </div>
  )
}

export default Artist
