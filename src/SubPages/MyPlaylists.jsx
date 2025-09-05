import React from 'react';
import { useData } from '../DataProvider';
import { Link } from 'react-router-dom';

function MyPlaylists() {
  const { myPlaylists } = useData();

  return (
    <>
      {myPlaylists?.map((item, index) => {
        const cover = item.images?.[0]?.url || ''
        return (
          <Link
            key={index}
            to={`/Home/Library/Playlist/${item.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="card">
              <div className="card-cover" style={{ backgroundImage: `url(${cover})` }} />
              <div className="card-body">
                <div className="truncate">{item.name}</div>
                <div className="muted truncate">{item.owner?.display_name}</div>
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default MyPlaylists
