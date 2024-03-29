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
      <input
      style={{
        width: '40px'
      }}
        type="number"
        min={settings[attribute].min}
        max={settings[attribute].max}
        value={settings[attribute].min}
        onChange={(e) => handleChange(attribute, 'min', e.target.value)}
      />
      <input
        style={{
          width: '40px'
        }}
        type="number"
        min={settings[attribute].min}
        max={settings[attribute].max}
        value={settings[attribute].max}
        onChange={(e) => handleChange(attribute, 'max', e.target.value)}
      />
      <input
        style={{
          width: '40px'
        }}
        type="number"
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
          <input
            style={{
              width: '40px'
            }}
            placeholder={20}
            onChange={(e) => handleChange(attribute, 'target', e.target.value)}
          />
        </div>

        {Object.keys(settings).map((setting, index) => (
          <SliderElement key={index} attribute={setting}/>
        ))}

      </div>
    </div>
  )
}

export default Settings