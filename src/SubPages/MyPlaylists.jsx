import React from 'react';
import { useData } from '../DataProvider';

function MyPlaylists() {
  const { myPlaylists } = useData();

  return (
    <>
      {myPlaylists?.map((item, index) => {
        const cover = item.images?.[0]?.url || ''
        return (
          <div className="card" key={index}>
            <div className="card-cover" style={{ backgroundImage: `url(${cover})` }} />
            <div className="card-body">
              <div className="truncate">{item.name}</div>
              <div className="muted truncate">{item.owner?.display_name}</div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default MyPlaylists
