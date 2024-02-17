import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Track from '../components/child/Track';
import { Outlet } from 'react-router-dom';


function Selection() {
  // const {
  //   item,
  //   imageUrl,
  //   type,
  //   lineOne,
  //   lineTwo,
  //   trackArray
  // } = useLocation().state

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 5.4fr',
      }}
    >

        <Outlet />
      </div>

  )
}

export default Selection