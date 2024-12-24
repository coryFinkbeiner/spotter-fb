import React from 'react'

function Track() {
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
          gridTemplateColumns: '1fr 1.3fr 4.4fr 4.4fr'
        }}
      >
        <div
          style={{
            backgroundColor: 'black',

          }}
        >
          1

        </div>
        <div
          style={{
            backgroundColor: 'blue',

          }}
        >
          A

        </div>
        <div
          style={{
            backgroundColor: 'grey',

          }}
        >
          song

        </div>
        <div
          style={{
            backgroundColor: 'black',

          }}
        >

          artist
        </div>

      </div>
    </div>
  )
}

export default Track