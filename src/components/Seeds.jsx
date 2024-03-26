import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SeededArtist({ seed }) {
  return (
    <div
      style={{
        borderRadius: '100%',
        height: '70px',
        width: '70px',
        backgroundImage: `url(${seed.images[0].url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
    </div>
  );
}

function SeededGenre({ seed }) {
  return (
    <div style={{ backgroundColor: 'lightblue', padding: '10px', textAlign: 'center' }}>
      {seed}
    </div>
  );
}

function SeededSong({ seed }) {
  return (
    <div
      style={{
        height: '70px',
        width: '70px',
        backgroundImage: `url(${seed.album.images[0].url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          color: 'white',
          padding: '3px 6px',
          borderRadius: '50%',
          fontSize: '24px',
          top: '30%',
          left: '30%',
        }}
      >
        {seed.track_number}
      </div>
    </div>
  );
}

function Seeds({ seeds, setSeeds, settings, setSettings }) {
  const [isHovering, setIsHovering] = useState(false);

  if (seeds.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>Pick 1-5 Seeds</div>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '4px',

      }}
    >
      {seeds.slice(0, 5).map((seed, index) => (
        <div
          style={{
            position: 'relative',
          }}
          onClick={() => {
            const newSeeds = seeds.slice();
            newSeeds.splice(index, 1);
            setSeeds(newSeeds)
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {typeof seed === 'string' && <SeededGenre key={index} seed={seed} />}
          {seed.type === 'track' && <SeededSong key={index} seed={seed} />}
          {seed.type === 'artist' && <SeededArtist key={index} seed={seed} />}
          {isHovering && (
            <>
              <div
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  backgroundColor: 'red',
                  opacity: .6,
                  fontWeight: 'bold',
                }}
              >
                Delete
              </div>
            </>
          )}
        </div>
      ))}

      <div
        style={{
          gridRow: '2 / 3',
          gridColumn: '3 / 4',
        }}
      >
        <Link
          to={'/results'}
          state={{
            seeds,
            settings,
          }}
        >
          <div> Get Results </div>
        </Link>
      </div>
    </div>
  );
}

export default Seeds;
