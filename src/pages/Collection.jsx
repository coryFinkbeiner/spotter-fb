import React from 'react';
import { useLocation } from 'react-router-dom';

function Collection() {
  const location = useLocation();
  const passedState = location.state;
  console.log(passedState);

  return (
    <div>Collection</div>
  )
}

export default Collection