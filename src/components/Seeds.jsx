import React, { useState, useEffect } from 'react';

function SeededArtist({ seed }) {
  return (
    <div style={{ backgroundColor: 'lightblue', padding: '10px', textAlign: 'center' }}>
      artist
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
    <div style={{ backgroundColor: 'lightblue', padding: '10px', textAlign: 'center' }}>
      song
    </div>
  );
}

function Seeds({ seeds, setSeeds }) {
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
      {seeds.map((seed, index) => (

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
                  left: '40%',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  height: '100%',
                  width: '40%',
                  zIndex: 1,
                  backgroundColor: 'red',
                  opacity: .2,
                  fontWeight: 'bold'
                }}

              >
                Delete
              </div>
            </>
          )}
        </div>

      ))}

      {/* Static element at the bottom right */}
      <div
        style={{
          gridRow: '2 / 3', // Span from the second row to the third row
          gridColumn: '3 / 4', // Span from the third column to the fourth column
          backgroundColor: 'lightgreen', // Example background color
          padding: '10px',
          textAlign: 'center',
        }}
      >
        Static Element
      </div>
    </div>
  );
}

export default Seeds;
