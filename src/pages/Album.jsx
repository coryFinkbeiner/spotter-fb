import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useData } from '../DataProvider'
import Track from '../Components/Track'

function Album() {
  const { id } = useParams()
  const { accessToken } = useData()
  const [ album, setAlbum ] = useState(null)

  useEffect(() => {
    if (!accessToken || !id) return
    ;(async () => {
      try {
        const res = await axios({
          method: 'GET',
          url: `https://api.spotify.com/v1/albums/${id}`,
          headers: { Authorization: `Bearer ${accessToken}` },
          params: { market: 'from_token' },
        })
        setAlbum(res.data)
      } catch (e) {
        console.error('Album fetch error', e)
      }
    })()
  }, [accessToken, id])

  if (!album) return <div className="muted">Loading album…</div>

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 16, marginBottom: 16 }}>
        <div className="card-cover" style={{ backgroundImage: `url(${album.images?.[0]?.url})` }} />
        <div>
          <div className="muted">Album</div>
          <h2 style={{ margin: '4px 0' }}>{album.name}</h2>
          <div className="muted truncate">{album.artists?.map(a => a.name).join(', ')}</div>
        </div>
      </div>

      <div>
        {album.tracks?.items?.map((t, i) => {
          const track = { ...t, album: { images: album.images } }
          return <Track key={t.id || i} track={track} index={i} />
        })}
      </div>
    </div>
  )
}

export default Album

