import React from 'react'
import Seeds from './Seeds'

function Topbar() {
  return (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ flex: 0.92, minWidth: 0 }}>
        <Seeds />
      </div>
      <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--border)', flexShrink: 0 }}></div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexShrink: 0, flex: 0.08 }}>
        <button 
          className="topbar-button close-button"
          onClick={() => console.log('Close clicked')}
          title="Close"
        >
          ✕
        </button>
        <button 
          className="topbar-button seed-button"
          onClick={() => console.log('Seed clicked')}
          title="Seed"
        >
          SEED
        </button>
        <button 
          className="topbar-button queue-button"
          onClick={() => console.log('Queue clicked')}
          title="Queue"
        >
          ⏭️
        </button>
      </div>
    </div>
  )
}

export default Topbar
