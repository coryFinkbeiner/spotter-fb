import React from 'react';
import { useData } from '../DataProvider';

function MyAlbums() {
  const { myAlbums } = useData();

  return (
    <>
      {myAlbums?.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              // backgroundColor: 'white',
              display: 'grid',
              gridTemplateColumns: `3fr 1fr`,
              cursor: 'pointer',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >


            <div
              style={{
                borderRadius: '.4rem',
                height: '10rem',
                width: '10rem',
                backgroundImage: `url(${item?.album.images[0]?.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}

            >
            </div>

            <div>

              <div
                style={{
                }}
              >
                {item.album.name}
              </div>
              <div

              >
                {item.album.name}
              </div>
            </div>

          </div>
        )

      })}
    </>
  )
}

export default MyAlbums