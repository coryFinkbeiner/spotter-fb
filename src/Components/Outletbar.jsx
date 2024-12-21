import React from 'react'
import { useLocation } from 'react-router-dom';

function Outletbar() {
  const location = useLocation();

  console.log({location})

  // Render different content based on the current route
  switch(location.pathname) {
    case '/Home/Settings':
      return <div>Settings Header</div>;
    case '/Home/Search':
      return <div>Search Header</div>;
    case '/Home/Library':
      return <div>Library Header</div>;
    default:
      return <div>Default Header</div>;
  }
}

export default Outletbar