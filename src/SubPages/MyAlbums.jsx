import React from 'react';
import { useData } from '../DataProvider';
import { Link } from 'react-router-dom';

function MyAlbums() {
  const { myAlbums } = useData();

  return (
    <>
      {myAlbums?.map((item, index) => {
        const cover = item?.album.images?.[0]?.url
        return (
          <Link
            key={index}
            to={`/Home/Library/Album/${item.album.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="card">
              <div className="card-cover" style={{ backgroundImage: `url(${cover})` }} />
              <div className="card-body">
                <div className="truncate">{item.album.name}</div>
                <div className="muted truncate">{item.album.artists?.[0]?.name}</div>
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default MyAlbums
