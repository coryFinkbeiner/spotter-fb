import React, { useState } from 'react'
import { useData, useTrackHover } from '../DataProvider'

function Artist({ artist }) {
  const { seeds, setSeeds } = useData()
  const { setTrackHovered } = useTrackHover()
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    setTrackHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTrackHovered(false)
  }

  return (
    <div 
      className="card" 
      style={{ cursor: 'pointer', borderColor: isHovered ? 'var(--primary)' : 'var(--border)' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => { if (seeds.length < 5) setSeeds(prev => [...prev, { ...artist, type: 'artist' }]) }}
    >
      <div className="card-cover artist-cover" style={{ backgroundImage: `url(${artist.images[0]?.url})`, borderColor: isHovered ? 'var(--primary)' : 'var(--border)' }}>
        {isHovered && (
          <div className="artist-plus">+</div>
        )}
      </div>
      <div className="card-body">
        <div className="truncate">{artist.name}</div>
        <div className="muted truncate">Artist</div>
      </div>
    </div>
  )
}

export default Artist
