import React from 'react'
import Seeds from './Seeds'

function Topbar() {
  return (
    <div style={{ height: '100%', display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: 12 }}>
      <div style={{ padding: '8px' }}>
        <Seeds />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default Topbar
