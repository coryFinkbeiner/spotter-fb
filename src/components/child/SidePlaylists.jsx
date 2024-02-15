import React from 'react';
import Collection from './Collection';

function SidePlaylists({playlists}) {

  return (
    <>
      {playlists?.items.map((item, index) => (
          <Collection
            key={index}
            item={item}
            imageUrl={item.images[0]?.url}
            type={'playlist'}
            lineOne={item.name}
            lineTwo={item.owner.display_name}
          />
      ))}
    </>
  )
}

export default SidePlaylists