import React from 'react'

function Collection({
  key,
  item
}) {




  return (
    <div
      style={{
        backgroundImage: `url(${item.album.images[0].url})`,
        backgroundSize: 'cover', // Options: 'auto', 'contain', 'cover', or specific values like '50% 50%'
        backgroundPosition: 'center',
        height: '85px',
        width: '85px',
      }}
    >
      <div></div>

    </div>
  )
}

export default Collection