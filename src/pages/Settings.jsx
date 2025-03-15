import React from 'react'
import { useData } from '../DataProvider';


function Settings() {

  const { mySettings, setMySettings } = useData();

  const fieldStyles = {
    display: 'grid',
    gridTemplateColumns: `1fr 1fr`,
  }


  // const inputElement = ()



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
                {/* <div
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
                </div> */}
                <div
                  style={fieldStyles}
                >
                  <div
                    style={{}}
                  >
                    MIN
                  </div>
                  <div
                    style={{}}
                  >
                    <input
                      type="text"
                      value={mySettings[setting].min}
                      style={{
                        height: '100%',
                        width: '3.5rem'
                      }}
                      onChange={(e) => {
                        setMySettings((prevSettings) => ({
                          ...prevSettings,
                          [setting]: {
                            ...prevSettings[setting],
                            min: e.target.value,
                          },
                        }));
                      }}
                    />
                  </div>
                </div>
                <div
                  style={fieldStyles}
                >
                  <div
                    style={{}}
                  >
                    MAX
                  </div>
                  <input
                      type="text"
                      value={mySettings[setting].max}
                      style={{
                        height: '100%',
                        width: '3.5rem'
                      }}
                    />
                </div>
                <div
                  style={fieldStyles}
                >
                  <div
                    style={{}}
                  >
                    TGT
                  </div>
                  <div
                    style={{}}
                  >
                    field
                  </div>
                </div>

              </div>
            )
          })

        }



      </div>

    </div>
  )
}

export default Settings