import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useData } from '../DataProvider'
import Track from '../Components/Track'

// Scaffold only: mimic Search layout with a single action bar
function Results() {
  const { accessToken, seeds, trackAmount } = useData()
  const [ playlistName, setPlaylistName ] = useState('New Playlist')
  const [ tracks, setTracks ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState('')

  useEffect(() => {
    const fetchRecs = async () => {
      setLoading(true)
      setError('')
      try {
        if (!accessToken) throw new Error('Missing access token')
        if (!seeds || seeds.length === 0) {
          setTracks([])
          return
        }

        // Minimal ID extraction: accept raw 22-char IDs only
        const isId = (raw) => typeof raw === 'string' && /^[A-Za-z0-9]{22}$/.test(raw)

        // Collect up to 5 seeds in order, split across artists/tracks
        const artistIds = []
        const trackIds = []
        for (const seed of seeds) {
          if (artistIds.length + trackIds.length >= 5) break
          if (seed.type === 'artist' && isId(seed.id)) artistIds.push(seed.id)
          else if (seed.type === 'track' && isId(seed.id)) trackIds.push(seed.id)
        }

        const params = new URLSearchParams()
        params.append('limit', Math.max(1, Math.min(100, trackAmount || 20)))
        if (artistIds.length) params.append('seed_artists', artistIds.join(','))
        if (trackIds.length && !artistIds.length) params.append('seed_tracks', trackIds.join(','))

        const url = `https://api.spotify.com/v1/recommendations?${params.toString()}`
        const res = await axios.get(url, { headers: { Authorization: `Bearer ${accessToken}` } })
        setTracks(res.data?.tracks ?? [])
      } catch (e) {
        console.error('Recommendations fetch error', e?.response?.status, e?.response?.data)
        setError(e?.response?.data?.error?.message || e?.message || 'Failed to load recommendations')
      } finally {
        setLoading(false)
      }
    }

    fetchRecs()
  }, [accessToken, seeds, trackAmount])

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
          {loading && (
            <div className="panel" style={{ padding: 16 }}>Loading recommendations…</div>
          )}
          {error && (
            <div className="panel" style={{ padding: 16, color: '#ff6b6b' }}>{error}</div>
          )}
          {!loading && !error && (
            <div>
              {(!seeds || seeds.length === 0) && (
                <div className="panel" style={{ padding: 16, color: 'var(--muted)' }}>
                  Add 1–5 seeds, then press SEED.
                </div>
              )}
              {tracks?.map((track, index) => (
                <Track key={`${track.id || 't'}-${index}`} track={track} index={index + 1} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Results
