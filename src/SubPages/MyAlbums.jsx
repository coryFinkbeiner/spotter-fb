import React from 'react';
import { useData } from '../DataProvider';

function MyAlbums() {
  const { myAlbums } = useData();

  return (
    <>
      {myAlbums?.map((item, index) => {
        const cover = item?.album.images?.[0]?.url
        return (
          <div className="card" key={index}>
            <div className="card-cover" style={{ backgroundImage: `url(${cover})` }} />
            <div className="card-body">
              <div className="truncate">{item.album.name}</div>
              <div className="muted truncate">{item.album.artists?.[0]?.name}</div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default MyAlbums
