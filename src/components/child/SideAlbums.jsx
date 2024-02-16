import React from 'react';
import Collection from './Collection';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';

function SideAlbums() {
  const { albums } = useData().library;

  return (
    <>
      {albums?.items.map((item, index) => (
        <Collection
          key={index}
          item={item}
          imageUrl={item.album.images[0].url}
          type={'album'}
          lineOne={item.album.name}
          lineTwo={item.album.artists[0].name}
          trackArray={item.album.tracks.items}
        />
      ))}
    </>
  )
}

export default SideAlbums