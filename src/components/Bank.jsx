import React from 'react';
import { useData } from '../DataProvider';
import BankCollection from './child/BankCollection';
import { NavLink } from 'react-router-dom';

export default function Bank() {
  const {
    redSpot, setRedSpot,
    yellowSpot, setYellowSpot,
    blueSpot, setBlueSpot,
  } = useData();


  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
      }}
    >
      <NavLink
        to={'/thread'}
        style={{ textDecoration: 'none', color: 'white', backgroundColor: 'white' }}>
        Thread
      </NavLink>


      <NavLink
        to={'/spot'}
        state={redSpot}
        style={{ textDecoration: 'none', color: 'white', backgroundColor: 'red' }}>
        R
      </NavLink>
      <NavLink to={'/spot'} state={yellowSpot} style={{ textDecoration: 'none', color: 'white', backgroundColor: 'yellow' }}>
        Y
      </NavLink>

      <NavLink to={'/spot'} state={blueSpot} style={{ textDecoration: 'none', color: 'white', backgroundColor: 'blue' }}>
        B
      </NavLink>


    </div>
  )
}