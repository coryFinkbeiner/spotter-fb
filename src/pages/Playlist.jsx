import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useData } from '../DataProvider'
import Track from '../Components/Track'

function Playlist() {
  const { id } = useParams()
  const { accessToken } = useData()
  const [ playlist, setPlaylist ] = useState(null)

  useEffect(() => {
    if (!accessToken || !id) return
    ;(async () => {
      try {
        const res = await axios({
          method: 'GET',
          url: `https://api.spotify.com/v1/playlists/${id}`,
          headers: { Authorization: `Bearer ${accessToken}` },
          params: { market: 'from_token' },
        })
        setPlaylist(res.data)
      } catch (e) {
        console.error('Playlist fetch error', e)
      }
    })()
  }, [accessToken, id])

  if (!playlist) return <div className="muted">Loading playlist…</div>

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 16, marginBottom: 16 }}>
        <div className="card-cover" style={{ backgroundImage: `url(${playlist.images?.[0]?.url})` }} />
        <div>
          <div className="muted">Playlist</div>
          <h2 style={{ margin: '4px 0' }}>{playlist.name}</h2>
          <div className="muted truncate">{playlist.owner?.display_name}</div>
        </div>
      </div>

      <div>
        {playlist.tracks?.items?.map((it, i) => {
          const track = it.track
          if (!track) return null
          return <Track key={`${track.id || 'row'}-${i}`} track={track} index={i + 1} />
        })}
      </div>
    </div>
  )
}

export default Playlist
