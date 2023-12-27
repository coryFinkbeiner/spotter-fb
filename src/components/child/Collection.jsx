import React, { useState, useEffect } from 'react'

function Collection({
  key,
  item,
}) {

  const imageUrl = item.album && item.album.images && item.album.images[0]
    ? item.album.images[0].url
    : item.images && item.images[0]
      ? item.images[0].url
      : "https://i.scdn.co/image/ab67616d0000b2732ba0863533344c205a1e3669";

  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover', // Options: 'auto', 'contain', 'cover', or specific values like '50% 50%'
        backgroundPosition: 'center',
        height: '85px',
        width: '85px',
      }}
    >
    </div>
  )
}

export default Collection