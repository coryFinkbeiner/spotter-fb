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
          Object.keys(mySettings).map((setting, index) => {

            return (
              <div

                style={{
                  backgroundColor: 'blue',
                  display: 'grid',
                  gridTemplateColumns: '4.5fr 1fr 1fr 1fr',
                  gap: '1rem'
                }}
              >
                <div
                  style={{

                  }}
                >{setting}</div>
                <div
                  style={{
                    margin: '.4rem'

                  }}
                >
                  <input
                    type="text" // Or any other input type (number, checkbox, etc.)
                    value={mySettings[setting].min}
                    placeholder={mySettings[setting].min}
                    // onChange={(e) => onChange(e.target.value)}
                    style={{
                      height: '100%'

                    }}
                  />
                </div>
                <div
                  style={{

                  }}
                >max</div>
                <div
                  style={{

                  }}
                >target</div>
              </div>
            )
          })

        }



      </div>

    </div>
  )
}

export default Settings