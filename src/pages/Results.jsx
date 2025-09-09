import React, { useState } from 'react'
import { useData } from '../DataProvider'

// Scaffold only: mimic Search layout with a single action bar
function Results() {
  const { trackAmount } = useData()
  const [ playlistName, setPlaylistName ] = useState('New Playlist')

  return (
    <div className="home-shell" style={{ height: '100%', overflow: 'hidden' }}>
      {/* Single bar like Search (Outletbar), but just one */}
      <div className="panel outletbar-area">
        <div className="subnav" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, alignItems: 'center' }}>
          <input
            type="text"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            placeholder="Name your playlist"
            style={{ height: 40, padding: '0 12px', borderRadius: 10, border: '1px solid var(--border)', background: 'var(--panel-2)', color: 'var(--text)' }}
          />
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="subnav-link" title="Option 1">1</button>
            <button className="subnav-link" title="Make Playlist" disabled>Make Playlist</button>
            <button className="subnav-link" title="Queue" disabled>Queue</button>
          </div>
        </div>
      </div>

      {/* Content area like Search's content-scroll */}
      <div className="content-scroll" style={{ height: 'calc(100% - 20px)', overflow: 'hidden' }}>
        <div className="content-scroll-inner">
          <div className="panel" style={{ padding: 16, color: 'var(--muted)' }}>
            Tracks will render here (target count: {trackAmount}).
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results
