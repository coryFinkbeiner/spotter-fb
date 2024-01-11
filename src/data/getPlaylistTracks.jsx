import React, { useState, useEffect } from 'react';
import axios from 'axios';

function getPlaylistTracks(
  accessToken,
  playlist_id
) {
  const [ playlistData, setPlaylistData ] = useState({});
  const [ playlistTracks, setPlaylistTracks ] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          // params: {
          //   limit: 50,
          //   playlist_id: "3cEYpjA9oz9GiPac4AsH4n",
          // },
        });
        setPlaylistData(response.data);
        setPlaylistTracks(response.data.items)
      } catch (error) {
        console.log('API error', error);
      }
    })();
  }, [accessToken, playlist_id]);

  return {
    playlistData,
    playlistTracks
  }
}

export default getPlaylistTracks