import React from 'react';
import getPlaylistTracks from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/data/getPlaylistTracks.jsx';


function Playlist({
  item,
  imageUrl,
  type,
  lineOne,
  lineTwo,
  trackArray
}) {
  return (
    <div>{imageUrl}</div>
  )
}

export default Playlist;