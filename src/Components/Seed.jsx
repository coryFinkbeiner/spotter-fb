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
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80%',
        width: '80%',
        position: 'relative',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px #000000',
        }}
      >
        {index}
      </div>
    </div>
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