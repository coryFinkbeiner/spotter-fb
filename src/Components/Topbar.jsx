import React from 'react'
import Seeds from './Seeds'
import { useNavigate } from 'react-router-dom'
import { useData } from '../DataProvider'

function Topbar() {
  const navigate = useNavigate()
  const { seeds } = useData()

  const handleSeedClick = () => {
    if (seeds.length === 0) return
    navigate('/Results')
  }
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
          onClick={handleSeedClick}
          title="Seed"
          disabled={seeds.length === 0}
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
