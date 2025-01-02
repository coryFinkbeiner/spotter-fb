import React from 'react'
import Seed from './Seed'
import { useData } from '../DataProvider';

function Seeds() {
  const { seeds, setSeeds } = useData()

  return (
    <div
      style={{
        backgroundColor: 'orange',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        height: '100%',
      }}
    >
      {seeds?.map((seed, index) => {
        let imageUrl = ''
        let name = ''
        let type = ''

        if (seed.type === 'artist') {
          imageUrl = seed?.images[0]?.url
          name = seed.name
          type = 'artist'
        }
        if (seed.type === 'track') {
          imageUrl = seed?.album.images[0]?.url
          name = seed.name
          type = 'track'
        }

        return <Seed
            seed={seed}
            index={index}
            key={index}
            name={name}
            imageUrl={imageUrl}
            type={type}
          />
      })}

    </div>
  )
}

export default Seeds