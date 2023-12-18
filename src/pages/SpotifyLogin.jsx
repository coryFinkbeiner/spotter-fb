import React, { useState } from 'react'

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=3037946b4a254a64886fff31551a05cf&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20app-remote-control"

function SpotifyLogin() {
  return (
    <button onClick={() => (window.location.href = AUTH_URL)}>
      Login With Spotify
    </button>
  )
}

export default SpotifyLogin