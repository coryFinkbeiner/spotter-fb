import React from 'react';
import { useOutletContext } from "react-router-dom";

function PickArtist() {
  const [seeds, setSeeds] = useOutletContext();

  return (
    <div>PickArtist</div>
  )
}

export default PickArtist