import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Seeds from '../components/Seeds';

const initialSettings = {
  trackAmount: { target: 20 },
  acousticness: { min: 0, max: 1, target: undefined },
  danceability: { min: 0, max: 1, target: undefined },
  duration: { min: undefined, max: undefined, target: undefined },
  energy: { min: 0, max: 1, target: undefined  },
  instrumentalness: { min: 0, max: 1, target: undefined },
  key: { min: 0, max: 11, target: undefined  },
  liveness: { min: 0, max: 1, target: undefined },
  loudness: { min: 0, max: 1, target: undefined },
  mode: { min: 0, max: 1, target: undefined },
  popularity: { min: 0, max: 1, target: undefined },
  speechiness: { min: 0, max: 1, target: undefined },
  tempo: { min: 0, max: 1, target: undefined  },
  timeSignature: { min: 0, max: 11, target: undefined },
  valence: { min: 0, max: 1, target: undefined }
};

function Recommendations({children}) {
  const [ settings, setSettings ] = useState(initialSettings);
  const [ seeds, setSeeds ] = useState([]);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 5.4fr',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2.5fr',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateRows: '1fr 1fr 1fr 1fr',
            }}
          >
            <NavLink to="/recommendations/PickArtist" style={{ textDecoration: 'none', color: 'white' }}>
              Artist
            </NavLink>
            <NavLink to="/recommendations/PickSong" style={{ textDecoration: 'none', color: 'white' }}>
              <div>Song</div>
            </NavLink>

            <NavLink to="/recommendations/PickGenre" style={{ textDecoration: 'none', color: 'white' }}>
              <div>Genre</div>
            </NavLink>
            <NavLink to="/recommendations" style={{ textDecoration: 'none', color: 'white' }}>
              <div>Settings</div>
            </NavLink>
          </div>
        </div>

        <Seeds seeds={seeds} setSeeds={setSeeds} settings={settings} setSettings={setSettings}/>

      </div>

      <Outlet context={[seeds, setSeeds, settings, setSettings]}/>

    </div>
  )
}

export default Recommendations