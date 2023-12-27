import React, { useState, useEffect } from 'react'

function Collection({
  key,
  item,
}) {
  const [ imageUrl, setImageUrl ] =useState(null)

  useEffect(() => {
    if (!item) return
    if (item.album) {
      setImageUrl(item.album.images[0].url)
    } else if (item.images[0]) {
      setImageUrl(item.images[0].url)
    } else {
      setImageUrl("https://i.scdn.co/image/ab67616d0000b2732ba0863533344c205a1e3669")
    }
  }, [item])

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