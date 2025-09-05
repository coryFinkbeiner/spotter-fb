import { useData } from '../DataProvider'
import React from 'react'

function Seed({ seed, index, imageUrl, name, type }) {
  const { setSeeds } = useData()

  const ArtistSeed = () => (
    <div className="seed-artist" style={{ backgroundImage: `url(${imageUrl})` }} />
  )

  const TrackSeed = () => (
    <div className="seed-track" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="seed-index">{index + 1}</div>
    </div>
  )

  return (
    <div className="seed" onClick={() => setSeeds(prev => prev.filter((_, i) => i !== index))}>
      {type === 'artist' ? <ArtistSeed /> : type === 'track' ? <TrackSeed /> : null}
    </div>
  )
}

export default Seed
