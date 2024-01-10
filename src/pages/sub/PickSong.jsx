import React from 'react';
import { useOutletContext } from "react-router-dom";

function PickSong() {
  const [seeds, setSeeds] = useOutletContext();

  return (
    <div>PickSong</div>
  )
}

export default PickSong