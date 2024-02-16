import React from 'react';
import Collection from './Collection';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';
import getPlaylistTracks from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/data/getPlaylistTracks.jsx';

function SidePlaylists() {
  const { accessToken } = useData();
  const { playlists } = useData().library;

  return (
    <>
      {playlists?.items.map((item, index) => {

        const { playlistTracks } = getPlaylistTracks(accessToken, item.id)

        return (
          <Collection
            key={index}
            item={item}
            imageUrl={item.images[0]?.url}
            type={'playlist'}
            lineOne={item.name}
            lineTwo={item.owner.display_name}
            trackArray={playlistTracks}
          />
        )

      })}
    </>
  )
}

export default SidePlaylists