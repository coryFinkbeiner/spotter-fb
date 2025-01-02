import { useData } from '../DataProvider'
import React from 'react'

function Seed({ seed, index, imageUrl, name, type }) {
  const { seeds, setSeeds } = useData()

  const ArtistSeed = () => (
    <div
      style={{
        borderRadius: '100%',
        height: '6rem',
        width: '6rem',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}

    >
    </div>
  )

  const TrackSeed = () => (
    <div>trackdsfd</div>
  )

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={() => {
        setSeeds(prevSeeds => prevSeeds.filter((_, i) => i !== index));
      }}
    >
      {type === 'artist' ? <ArtistSeed /> : type === 'track' ? <TrackSeed /> : null}
    </div>
  )
}

export default Seed