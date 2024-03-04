import React, { useState, useEffect } from 'react';
import Collection from './child/Collection';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';
import Album from './Album';
import Playlist from './Playlist';

function LibrarySide() {
  const { myAlbums, myPlaylists } = useData();
  const [ radio, setRadio ] = useState('albums');


  // const Playlists = (
  //   <>
  //     {myPlaylists?.items.map((item, index) => {
  //       return (
  //         <Playlist
  //           key={index}
  //           item={item}
  //           imageUrl={item.images[0]?.url}
  //           type={'playlist'}
  //           lineOne={item.name}
  //           lineTwo={item.owner.display_name}
  //           trackArray={[]}
  //         />
  //       );
  //     })}
  //   </>
  // );

  const Albums = (
    <>
      {myAlbums?.map((album, index) => (
        <Album
          key={index}
          album={album}
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

        {/* {radio === 'playlists' ? Playlists : Albums} */}

        {Albums}

        </div>
      </div>
    </>
  )
}

export default LibrarySide

