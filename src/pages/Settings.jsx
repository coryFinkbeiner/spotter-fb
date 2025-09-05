import React from 'react'

function Settings() {
  const mySettings = [
    { name: 'acousticness' },
    { name: 'danceability' },
    { name: 'duration' },
    { name: 'energy' },
    { name: 'instrumentalness' },
    { name: 'key' },
    { name: 'liveness' },
    { name: 'loudness' },
    { name: 'mode' },
    { name: 'popularity' },
    { name: 'speechiness' },
    { name: 'tempo' },
    { name: 'timeSignature' },
    { name: 'valence' },
  ];

  return (
    <div className="panel" style={{ padding: '16px' }}>
      <div className="grid-auto-fill-180">
        {mySettings.map((s, i) => (
          <div key={i} className="card" style={{ padding: 12 }}>
            <div className="truncate" style={{ marginBottom: 8 }}>{s.name}</div>
            <div className="muted">Controls TBD</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Settings
