import React from 'react'
import { useData } from '../DataProvider'


function Track({track, index}) {
  const { setSeeds } = useData()

  return (
    <div className="track-row">
      <div onClick={() => setSeeds(prev => [...prev, track])}>{index + 1}</div>
      <div className="track-cover" style={{ backgroundImage: `url(${track.album.images[0]?.url})` }} />
      <div className="truncate">{track.name}</div>
      <div className="muted truncate">{track.artists[0].name}</div>
    </div>
  )
}

export default Track
