import React from 'react'

function Recommendations() {
  return (
    <div
      style={{
        backgroundColor: 'red',
        display: 'grid',
        gridTemplateRows: '.65fr 8fr',
      }}
    >
      <div
        style={{
          backgroundColor: 'grey',
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr 1fr 1fr 1fr 1fr',
        }}
      >
        <div>get rec</div>
        <div>1/add</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '1fr 20fr',
        }}
      >
        <div
          style={{
            backgroundColor: 'black',
            display: 'grid',
            gridTemplateColumns: '4fr 1fr 1fr 1fr',

          }}
        >
          <div>attribute</div>
          <div>min</div>
          <div>max</div>
          <div>target</div>

        </div>

        {/* slider / scroll container */}
        <div
          style={{
            backgroundColor: 'brown',
          }}
        >
          <div>
            <div
              style={{
                backgroundColor: 'darkBlue',
                display: 'grid',
                gridTemplateColumns: '4fr 1fr 1fr 1fr',
                height: '38px'
              }}
            >
              <div>acousticness</div>
              <div>input</div>
              <div>input</div>
              <div>input</div>

            </div>
            <div>
              danceability
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Recommendations