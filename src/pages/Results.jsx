import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Track from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/components/child/Track.jsx';
import { useData } from '/Users/coryfinkbeiner/steeperkeeper/my-firebase-react-app/src/DataProvider.jsx';

function Results() {
  const location = useLocation();
  const {
    seeds,
    settings
  } = location.state;
  const { accessToken } = useData();
  const [ trackArray, setTrackArray ] = useState([]);

  const seedArtists = [];
  const seedSongs = [];
  const seedGenres = [];

  for (const seed of seeds) {
    if (seed.type === 'track') seedSongs.push(seed.id);
    if (seed.type === 'artist') seedArtists.push(seed.id);
    if (typeof seed === String) seedGenres.push(seed);
  }

  const params = new URLSearchParams({
    limit: 20,
    market: 'ES',
    // min_acousticness: settings.acousticness.min / 100,
    // max_acousticness: settings.acousticness.max / 100,
    // target_acousticness: settings.acousticness.target /100,
    // min_danceability: settings.danceability.min / 100,
    // max_danceability: settings.danceability.max / 100,
    // target_danceability: settings.danceability.target / 100,
    // min_duration_ms: settings.duration.min,
    // max_duration_ms: settings.duration.max,
    // target_duration_ms: settings.duration.target,
    // min_energy: settings.energy.min / 100,
    // max_energy: settings.energy.max / 100,
    // target_energy: settings.energy.target / 100,
    // min_instrumentalness: settings.instrumentalness.min / 100,
    // max_instrumentalness: settings.instrumentalness.max / 100,
    // target_instrumentalness: settings.instrumentalness.target / 100,
    // min_key: settings.key.min,
    // max_key: settings.key.max,
    // target_key: settings.key.target,
    // min_liveness: settings.liveness.min / 100,
    // max_liveness: settings.liveness.max / 100,
    // target_liveness: settings.liveness.target / 100,
    // min_loudness: settings.loudness.min / 100,
    // max_loudness: settings.loudness.max / 100,
    // target_loudness: settings.loudness.target /100,
    // min_mode: settings.mode.min,
    // max_mode: settings.mode.max,
    // target_mode: settings.mode.target,
    // min_popularity: settings.popularity.min,
    // max_popularity: settings.popularity.max,
    // target_popularity: settings.popularity.target,
    // min_speechiness: settings.speechiness.min / 100,
    // max_speechiness: settings.speechiness.max / 100,
    // target_speechiness: settings.speechiness.target / 100,
    // min_tempo: settings.tempo.min,
    // max_tempo: settings.tempo.max,
    // target_tempo: settings.tempo.target,
    // min_time_signature: settings.timeSignature.min,
    // max_time_signature: settings.timeSignature.max,
    // target_time_signature: settings.timeSignature.target,
    // min_valence: settings.valence.min,
    // max_valence: settings.valence.max,
    // target_valence: settings.valence.target
  })

    if (seedArtists.length > 0) params.append('seed_artists', [seedArtists]);
    if (seedSongs.length > 0) params.append('seed_tracks', [seedSongs]);
    if (seedArtists.length > 0) params.append('seed_genres', [seedGenres]);


  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://api.spotify.com/v1/recommendations?${params}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log({data})
        setTrackArray(data.tracks);
        console.log({ data });
      } catch (error) {
        console.error('Error fetching album tracks:', error);
      }
    })();
  }, [])

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

          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateRows: '1fr 1fr 1fr',
            }}
          >
            <div
              style={{
                backgroundColor: 'red',
                borderRadius: '50%',
                opacity: .4,
              }}
              // onClick={() => setSpots(prevSpots => ({
              //   ...spots,
              //   red: [...spots.red, ...trackArray]
              // }))}
            ></div>
            <div
              style={{
                backgroundColor: 'yellow',
                borderRadius: '50%',
                opacity: .4,
              }}
              // onClick={() => setSpots(prevSpots => ({
              //   ...spots,
              //   yellow: [...spots.yellow, ...trackArray]
              // }))}
            ></div>
            <div
              style={{
                backgroundColor: 'blue',
                borderRadius: '50%',
                opacity: .4,
              }}
              // onClick={() => setSpots(prevSpots => ({
              //   ...spots,
              //   blue: [...spots.blue, ...trackArray]
              // }))}
            ></div>
          </div>
        </div>
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
          {trackArray?.map((track, index) => (
            <Track
              key={index}
              track={track}
              image={track.album.images[0].url}
              albumName={track.album.name}
              artistName={track.artists[0].name}
              duration_ms={track.duration_ms}
              name={track.name}
            />
          ))}
        </div>
      </div>
    </div>

  )
}

export default Results

