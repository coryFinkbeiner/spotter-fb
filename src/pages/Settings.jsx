import React from 'react'
import { useData } from '../DataProvider';


function Settings() {

  const { mySettings, setMySettings } = useData();

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: 'lightRed',
        height: '100%',
      }}
    >
      <div
      >d</div>
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
          gridTemplateColumns: `repeat(1, 1fr)`,
          gap: '1rem',
          padding: '1rem',
        }}
      >



        {
          Object.keys(mySettings).map((key, value) => {


            return (
              <div
                key={key}
                style={{
                  backgroundColor: 'blue',
                  display: 'grid',
                  gridTemplateColumns: '4.5fr 1fr 1fr 1fr',
                }}
              >
                <div
                  style={{

                  }}
                >{key}</div>
                <div
                  style={{

                  }}
                >1</div>
                <div
                  style={{

                  }}
                >2</div>
                <div
                  style={{

                  }}
                >3</div>
              </div>
            )
          })

        }



      </div>

    </div>
  )
}

export default Settings