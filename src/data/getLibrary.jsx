import React, { useState, useEffect } from 'react';
import axios from 'axios';

function getLibrary(accessToken) {

  const [ albums, setAlbums ] = useState(null);
  const [ playlists, setPlaylists ]  = useState(null);

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

        const playlistResponse = await axios({
          method: 'GET',
          url: `https://api.spotify.com/v1/me/playlists`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            limit: 50,
          },
        });

        setAlbums(albumResponse.data)
        setPlaylists(playlistResponse.data)

      } catch (error) {
        // console.log('API error', error);
      }
    })();
  }, [accessToken]);

  return {
    albums,
    playlists
  }

}

export default getLibrary