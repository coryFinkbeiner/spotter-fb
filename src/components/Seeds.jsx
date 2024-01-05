import React from 'react'

function Seeds() {
  return (
    <div
      style={{
        // backgroundColor: 'grey',
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
      }}
    >
      <div
        style={{
          backgroundColor: 'grey',
          display: 'grid',
          gridTemplateColumns: '3fr 1fr 3fr 1fr 3fr',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'black',
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'white',
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'black',
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'white',
          }}
        ></div>

      </div>


      <div
        style={{
          backgroundColor: 'grey',
          display: 'grid',
          gridTemplateColumns: '2fr 3fr 1fr 3fr 2fr',
        }}
      >
        <div
          style={{
            backgroundColor: 'black',
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'white',
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'black',
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'white',
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'black',
          }}
        ></div>

      </div>

    </div>
  )
}

export default Seeds