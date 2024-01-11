import React, { useState }  from 'react';

function Track({
  key,
  track,
  imageUrl,
}) {

  // from Search
  if (track.album) imageUrl = track.album.images[0].url

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.5fr 5fr 1.2fr',
      }}
    >
      <div>{key}</div>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80%',
          width: '80%',
        }}
      ></div>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '1.2fr 1fr',
        }}
      >
        <div>song</div>
        <div>artist</div>
      </div>
      <div>dur</div>

    </div>
  )
}

export default Track