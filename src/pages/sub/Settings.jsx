import React, { useState } from 'react';
import { useOutletContext } from "react-router-dom";

function Settings() {

  const [ seeds, setSeeds, settings, setSettings ] = useOutletContext();

  const handleChange = (attribute, type, value) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [attribute]: {
        ...prevSettings[attribute],
        [type]: value
      }
    }));
  };

  const SliderElement = ({ attribute }) => (
    <div
      style={{
        backgroundColor: 'darkBlue',
        display: 'grid',
        gridTemplateColumns: '4fr 1fr 1fr 1fr',
        height: '38px',
        gridGap: '5px'
      }}
    >
      <div>{attribute}</div>
      <textArea
        type="number"
        style={{ resize: 'none' }}
        placeholder={settings[attribute].min}
        value={settings[attribute].min}
        onChange={(e) => handleChange(attribute, 'min', e.target.value)}
      />
      <textArea
        type="number"
        style={{ resize: 'none' }}
        placeholder={settings[attribute].max}
        value={settings[attribute].max}
        onChange={(e) => handleChange(attribute, 'max', e.target.value)}
      />
      <textArea
        type="number"
        style={{ resize: 'none' }}
        value={settings[attribute].target}
        onChange={(e) => handleChange(attribute, 'target', e.target.value)}
      />
    </div>
  );

  return (
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
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        }}
      >
        {Object.keys(settings).map((setting, index) => {

          if (setting === 'trackAmount') {
            return (
              <div
                style={{
                  backgroundColor: 'darkBlue',
                  display: 'grid',
                  gridTemplateColumns: '4fr 1fr 1fr 1fr',
                  height: '38px',
                  gridGap: '5px'
                }}
              >
                <div>Amount of Tracks</div>
                <div></div>
                <div></div>
                <textarea
                  style={{ resize: 'none' }}
                  placeholder={20}
                  onChange={(e) => handleChange(attribute, 'target', e.target.value)}
                />
              </div>
            )
          }
          return <SliderElement attribute={setting}/>
        })}
      </div>
    </div>
  )
}

export default Settings