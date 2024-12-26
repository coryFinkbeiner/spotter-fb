import React from 'react'



function Settings() {

  // const initialSettings = [
  //   { name: 'trackAmount', target: 20 },
  //   { name: 'acousticness', min: 0, max: 100, target: undefined },
  //   { name: 'danceability', min: 0, max: 100, target: undefined },
  //   { name: 'duration', min: undefined, max: undefined, target: undefined },
  //   { name: 'energy', min: 0, max: 100, target: undefined },
  //   { name: 'instrumentalness', min: 0, max: 100, target: undefined },
  //   { name: 'key', min: 0, max: 11, target: undefined },
  //   { name: 'liveness', min: 0, max: 100, target: undefined },
  //   { name: 'loudness', min: 0, max: 100, target: undefined },
  //   { name: 'mode', min: 0, max: 100, target: undefined },
  //   { name: 'popularity', min: 0, max: 100, target: undefined },
  //   { name: 'speechiness', min: 0, max: 100, target: undefined },
  //   { name: 'tempo', min: undefined, max: undefined, target: undefined },
  //   { name: 'timeSignature', min: 0, max: 11, target: undefined },
  //   { name: 'valence', min: 0, max: 100, target: undefined }
  // ];

  // const Setting = ({name} => {

  //   return <div>{name}</div>
  // })

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: 'lightRed',
        height: '100%',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'yellow',
          display: 'grid',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          overflowY: 'scroll',
          gridTemplateColumns: `repeat(2, 1fr)`,
          gap: '1rem',
          padding: '1rem',
        }}
      >

        {/* {initialSettings.map((setting, index) => {
          // console.log({setting})
        })} */}



      </div>

    </div>
  )
}

export default Settings