import React, { useState, useEffect } from 'react';
import { useData } from '../DataProvider';
import axios from 'axios';

function MyAlbums() {
  const [ myAlbums, setMyAlbums ] = useState([])
  const { accessToken } = useData();


  // const MyAlbum = () => {

  // }



  useEffect(() => {
    (async () => {
      try {
        const albumResponse = await axios({
          method: 'GET',
          url: `https://api.spotify.com/v1/me/albums`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            limit: 50,
          },
        });

        setMyAlbums(albumResponse.data.items)

      } catch (error) {
        console.log('API error', error);
      }
    })();


  }, [accessToken]);

  return (
    <>
      {myAlbums?.map((item, index) => {



        return (



          <div
            style={{
              backgroundColor: 'pink',
              display: 'grid',
              gridTemplateColumn: `3fr, 1fr`,
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