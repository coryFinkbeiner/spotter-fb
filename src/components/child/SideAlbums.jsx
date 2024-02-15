import React from 'react';
import Collection from './Collection';

function SideAlbums({albums}) {

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