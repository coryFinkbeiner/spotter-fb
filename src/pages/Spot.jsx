import React from 'react';
import { useLocation } from 'react-router-dom';

function Spot() {
  const location = useLocation();
  const passedState = location.state;

  console.log(passedState);

  return (
    <div>Spot</div>
  )
}

export default Spot