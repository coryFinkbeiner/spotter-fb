import React from 'react';


function Album({
  item,
  imageUrl,
  type,
  lineOne,
  lineTwo,
  trackArray
}) {

  return (
    <div>{imageUrl}</div>
  )
}

export default Album;