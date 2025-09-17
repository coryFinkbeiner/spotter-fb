import React from 'react';
import { useData, useTrackHover } from '../DataProvider';
import { Link } from 'react-router-dom';

function MyAlbums() {
  const { myAlbums, setSeeds } = useData();
  const { setTrackHovered } = useTrackHover();

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
                {(() => {
                  const artist = item.album.artists?.[0];
                  const handleAddArtist = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!artist) return;
                    setSeeds(prev => [...prev, { ...artist, type: 'artist' }]);
                  };
                  return (
                    <div
                      className="album-artist-row"
                      onMouseEnter={() => setTrackHovered(true)}
                      onMouseLeave={() => setTrackHovered(false)}
                      onClick={handleAddArtist}
                      title="Add artist to seeds"
                    >
                      <div className="artist-add-circle">+</div>
                      <span className="muted truncate album-artist-link">{artist?.name}</span>
                    </div>
                  );
                })()}
              </div>
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default MyAlbums
