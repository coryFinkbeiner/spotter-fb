import React, { useState, useEffect } from 'react';
import { useData } from '../DataProvider';

function MyPlaylists() {
  const { myPlaylists } = useData();

  return (
    <>
      {myPlaylists?.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundColor: 'blue',
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
                backgroundImage: `url(${item.images?.[0]?.url || 'http://googleusercontent.com/image_generation_content/1'})`,
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
                {item.owner.display_name}
              </div>
              <div

              >
                {item.name}
              </div>
            </div>

          </div>
        )

      })}
    </>
  )
}

export default MyPlaylists