import React from 'react'
import { useData } from '../DataProvider'

function Settingsbar() {
  const { trackAmount, setTrackAmount, setMySettings, mySettings } = useData()

  const resetAll = () => {
    setMySettings({
      acousticness: { min: 0, max: 100, target: undefined },
      danceability: { min: 0, max: 100, target: undefined },
      duration: { min: undefined, max: undefined, target: undefined },
      energy: { min: 0, max: 100, target: undefined },
      instrumentalness: { min: 0, max: 100, target: undefined },
      key: { min: 0, max: 11, target: undefined },
      liveness: { min: 0, max: 100, target: undefined },
      loudness: { min: 0, max: 100, target: undefined },
      mode: { min: 0, max: 1, target: undefined },
      popularity: { min: 0, max: 100, target: undefined },
      speechiness: { min: 0, max: 100, target: undefined },
      tempo: { min: 60, max: 180, target: undefined },
      timeSignature: { min: 3, max: 7, target: undefined },
      valence: { min: 0, max: 100, target: undefined }
    })
  }

  const handleTrackAmountChange = (value) => {
    const n = Number(value)
    if (Number.isNaN(n)) return
    const clamped = Math.max(1, Math.min(100, Math.floor(n)))
    setTrackAmount(clamped)
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <div className="muted" style={{ width: 100 }}># of Songs</div>
        <input
          type="number"
          min={1}
          max={100}
          value={trackAmount}
          onChange={(e) => handleTrackAmountChange(e.target.value)}
          style={{ width: 100, height: 36, padding: '0 10px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--panel-2)', color: 'var(--text)' }}
        />
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
        <button className="subnav-link" onClick={resetAll}>Reset</button>
      </div>
    </div>
  )
}

export default Settingsbar
