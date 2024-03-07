import React from 'react';
import { useData } from '../DataProvider';
import BankCollection from './child/BankCollection';
import { NavLink } from 'react-router-dom';

export default function Bank() {
  const {
    spots
  } = useData();
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
      }}
    >
      <NavLink to={'/thread'}
        style={{ textDecoration: 'none', color: 'white', backgroundColor: 'white' }}>
        Thread
      </NavLink>
      <NavLink
        to={'/spot'}
        state={{
          tracks: spots.red,
          color: 'red',
        }}
        style={{ textDecoration: 'none', color: 'white', backgroundColor: 'red' }}>
        R
      </NavLink>
      <NavLink to={'/spot'} state={{
          tracks: spots.yellow,
          color: 'yellow',
        }}
        style={{ textDecoration: 'none', color: 'white', backgroundColor: 'yellow' }}>
        Y
      </NavLink>
      <NavLink to={'/spot'}
        state={{
          tracks: spots.blue,
          color: 'blue',
        }}
        style={{ textDecoration: 'none', color: 'white', backgroundColor: 'blue' }}>
        B
      </NavLink>
    </div>
  )
}