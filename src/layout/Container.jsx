import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import LibrarySide from '../components/LibrarySide';
import Bank from '../components/Bank';

function Container({ children }) {

  return (
    <div
      style={{

        height: '93vh',
        width: '36rem',
      }}
    >

        <Outlet />

    </div>
  );
}

export default Container