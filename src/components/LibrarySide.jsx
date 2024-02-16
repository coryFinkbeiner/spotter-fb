import React, { useState, useEffect } from 'react';
import Collection from './child/Collection';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';
import Album from './Album';
import Playlist from './Playlist';

function LibrarySide() {
  const { albums, playlists } = useData();
  const [ radio, setRadio ] = useState('albums');

  const Playlists = (
    <>
      {playlists?.items.map((item, index) => {
        // const { playlistTracks } = getPlaylistTracks(accessToken, item.id);

        return (
          <Playlist
            key={index}
            item={item}
            imageUrl={item.images[0]?.url}
            type={'playlist'}
            lineOne={item.name}
            lineTwo={item.owner.display_name}
            trackArray={[]}
          />
        );
      })}
    </>
  );

  const Albums = (
    <>
      {albums?.items.map((item, index) => (
        <Album
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
  );



  return (
    <>
      {/* radio buttons */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        <div
          onClick={() => setRadio('albums')}
        >Albums</div>
        <div
          onClick={() => setRadio('playlists')}
        >Playlists</div>
      </div>
      {/* box to render chosen collection items */}
      <div
        style={{
          position: 'relative',
          padding: '2px',
          height: '100%',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridGap: '2px',
            position: 'absolute',
            overflowY: 'scroll',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >

        {radio === 'playlists' ? Playlists : Albums}

        </div>
      </div>
    </>
  )
}

export default LibrarySide

