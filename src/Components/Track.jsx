import React from 'react'
import { useData } from '../DataProvider'


function Track({track, index}) {
  const { seeds, setSeeds } = useData()

  return (
    <div
      style={{
        backgroundColor: 'green',
        height: '4.4rem',
        width: '100%',
      }}
    >
      <div
        style={{
          backgroundColor: 'green',
          height: '4.4rem',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr 4.4fr 4.4fr',
        }}
      >
        <div
          style={{
            backgroundColor: 'black',
          }}
          onClick={() => setSeeds(prevSeeds => [...prevSeeds, track])}
        >
          {index+1}
        </div>
        <div
          style={{
            backgroundColor: 'blue',
          }}
        >
          <div
            style={{
              backgroundImage: `url(${track.album.images[0]?.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '80%',
              width: '80%',
              // position: 'relative',
              cursor: 'pointer',
            }}
          >
          </div>

        </div>
        <div
          style={{
            backgroundColor: 'grey',

          }}
        >
          {track.name}

        </div>
        <div
          style={{
            backgroundColor: 'black',

          }}
        >

          {track.artists[0].name}
        </div>

      </div>
    </div>
  )
}

export default Track