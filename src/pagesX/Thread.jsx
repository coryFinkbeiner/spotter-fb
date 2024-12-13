import React, { useState, useEffect } from 'react';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';
import Track from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/components/child/Track.jsx';
import axios from 'axios'

function interleaveArrays(arr1, arr2, arr3) {
  if (arr1.length === 0 && arr2.length === 0 && arr3.length === 0) return [];
  const result = [];
  if (arr1.length > 0) result.push(arr1.shift());
  if (arr2.length > 0) result.push(arr2.shift());
  if (arr3.length > 0) result.push(arr3.shift());
  return result.concat(interleaveArrays(arr1, arr2, arr3));
}

function shuffleArrays(arr1, arr2, arr3) {
  const combinedArray = [...arr1, ...arr2, ...arr3];
  for (let i = combinedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [combinedArray[i], combinedArray[j]] = [combinedArray[j], combinedArray[i]];
  }
  return combinedArray;
}

function Thread() {
  const {
    accessToken,
    userId,
    spots, setSpots,
  } = useData();
  const [ newPlaylist, setNewPlaylist ] = useState({
    name: '',
    tracks: [],
  });
  const [ orderType, setOrderType ] = useState('ordered');
  const [showModal, setShowModal] = useState(false);

  const CreatePlaylistModal = ({ closeModal }) => {
    const handleCreatePlaylist = () => {
      (async () => {
        try {
          const response = await axios({
            method: 'POST',
            url: `https://api.spotify.com/v1/users/${userId}/playlists`,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            data: {
              name: newPlaylist.name,
            },
          });
          const myUris = newPlaylist.tracks.map(track => track.uri);
          (async () => {
            try {
              const response2 = await axios({
                method: 'POST',
                url: `https://api.spotify.com/v1/playlists/${response.data.id}/tracks`,
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
                data: {
                  uris: myUris
                },
              });
            } catch (error) {
              console.log('API error', error);
            }
          })();

        } catch (error) {
          console.log('API error', error);
        }
      })();
      closeModal();
    };

    return (
      <div
        style={{
          position: 'fixed',
          zIndex: 1,
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          overflow: 'auto',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: '#fefefe',
            padding: '20px',
            border: '1px solid #888',
            borderRadius: '5px',
            textAlign: 'center',
            color: 'black',
          }}
        >
          <span
            style={{
              color: '#aaa',
              float: 'right',
              fontSize: '28px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            onClick={closeModal}
          >
            &times;
          </span>
          <h2>Create Playlist</h2>
          <p>Should we post "{newPlaylist.name}" to your Spotify?</p>
          <button onClick={handleCreatePlaylist}>Yes</button>
          <button onClick={closeModal}>No</button>
        </div>
      </div>
    );
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (orderType === '') return;
    if (orderType === 'ordered') setNewPlaylist({ ...newPlaylist, tracks: [ ...spots.red.slice(), ...spots.yellow.slice(), ...spots.blue.slice()] })
    if (orderType === 'threaded') {
      const threadedPlaylist = interleaveArrays(spots.red.slice(), spots.yellow.slice(), spots.blue.slice());
      setNewPlaylist({ ...newPlaylist, tracks: threadedPlaylist });
    }
  }, [ orderType ])

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 5.4fr',
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
              gridTemplateRows: '1fr 1fr',
            }}
          >
            <div>
              <input
                type="text"
                placeholder="Enter playlist name"
                value={newPlaylist.name}
                onChange={(e) => setNewPlaylist({ ...newPlaylist, name: e.target.value })}
              />
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr',
              }}
            >
              <div
                onClick={toggleModal}
                style={{
                  backgroundColor: 'green'
                }}
              >
                post
              </div>
              <div
                style={{
                  backgroundColor: 'red'
                }}
              >
                clear
              </div>
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
              onClick={() => {
                setOrderType('shuffled')
                const shuffledPlaylist = shuffleArrays(spots.red.slice(), spots.yellow.slice(), spots.blue.slice());
                setNewPlaylist({ ...newPlaylist, tracks: shuffledPlaylist });
              }}
            >Shuffled</div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && <CreatePlaylistModal closeModal={toggleModal} />}

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
          {newPlaylist.tracks.map((track, index) => (
            <Track
              key={index}
              track={track}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Thread