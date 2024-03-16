import React, { useState, useEffect } from 'react';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';
import Track from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/components/child/Track.jsx';



function interleaveArrays(arr1, arr2, arr3) {


  // Base case: if all arrays are empty, return an empty array
  if (arr1.length === 0 && arr2.length === 0 && arr3.length === 0) {
      return [];
  }

  // Recursively interleaves the arrays
  const result = [];
  if (arr1.length > 0) {
      result.push(arr1.shift());
  }
  if (arr2.length > 0) {
      result.push(arr2.shift());
  }
  if (arr3.length > 0) {
      result.push(arr3.shift());
  }

  // Concatenate the result with the result of recursive call
  return result.concat(interleaveArrays(arr1, arr2, arr3));
}


function Thread() {
  const {
    accessToken,
    spots, setSpots,
  } = useData();

  const [ newPlaylist, setNewPlaylist ] = useState({
    name: '',
    tracks: [],
  });

  const [ orderType, setOrderType ] = useState('');



  // useEffect(() => {

  //   if (orderType === '') return;

  //   if (orderType === 'ordered') setNewPlaylist({ ...newPlaylist, tracks: [ ...spots.red.slice(), ...spots.yellow.slice(), ...spots.blue.slice()] })
  //   if (orderType === 'threaded') {
  //     const threadedPlaylist = interleaveArrays(spots.red.slice(), spots.yellow.slice(), spots.blue.slice());
  //     setNewPlaylist({ ...newPlaylist, tracks: threadedPlaylist });
  //   }

  // }, [ orderType ])



  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr .25fr 5.4fr',
      }}
    >
      {/* top */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.85fr',
        }}
      >
        <div
          style={{
            // backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'white'
          }}
        ></div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '3fr 1fr',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateRows: '1.5fr 2fr 2fr',
            }}
          >
            <div>
              New Playlist
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter playlist name"
                value={newPlaylist.name}
                onChange={(e) => setNewPlaylist({ ...newPlaylist, name: e.target.value })}
              />
            </div>
            <div>
              user name
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateRows: '1fr 1fr 1fr',
            }}
          >
            <div
              style={{
              }}
              onClick={() => setOrderType('ordered')}
            >Ordered</div>
            <div
              style={{
              }}
              onClick={() => setOrderType('threaded')}
            >Threaded</div>
            <div
              style={{
              }}
              onClick={() => setOrderType('shuffled')}
            >Shuffled</div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: 'red',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        <div>create</div>
        <div>queue</div>
        <div>delete</div>
      </div>

      {/* render tracks */}
      <div
        style={{
          position: 'relative',
          margin: '4px 4px 4px 4px'
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
            gridTemplateColumns: `repeat(1, 1fr)`,
          }}
        >
          {/* {newPlaylist.tracks.map((track, index) => (
            <Track
              key={index}
              track={track}
              // image={image}
              // albumName
              // artistName
              // duration_ms={track.duration_ms}
              // name
            />
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default Thread