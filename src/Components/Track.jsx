import React, { useState } from 'react'
import { useData, useTrackHover } from '../DataProvider'


function Track({track, index}) {
  const { setSeeds, seeds } = useData()
  const { setTrackHovered } = useTrackHover()
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    setSeeds(prev => [...prev, { ...track, type: 'track' }])
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    setTrackHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTrackHovered(false)
  }

  return (
    <div className="track-row">
      <div 
        className="track-number" 
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: 'relative' }}
      >
        {isHovered ? '+' : index + 1}
      </div>
      <div className="track-cover" style={{ backgroundImage: `url(${track.album.images[0]?.url})` }} />
      <div className="truncate">{track.name}</div>
      <div className="muted truncate">{track.artists[0].name}</div>
    </div>
  )
}

export default Track
