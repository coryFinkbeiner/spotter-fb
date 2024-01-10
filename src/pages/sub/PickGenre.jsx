import React from 'react';
import { useOutletContext } from "react-router-dom";

function PickGenre() {
  const [seeds, setSeeds] = useOutletContext();

  return (
    <div>PickGenre</div>
  )
}

export default PickGenre