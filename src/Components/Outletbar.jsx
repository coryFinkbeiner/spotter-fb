import React from 'react'
import { useLocation } from 'react-router-dom';
import Searchbar from './Searchbar'


function Outletbar() {
  const location = useLocation();

  // Render different content based on the current route
  switch(location.pathname) {
    case '/Home/Settings':
      return <div>Settings Header</div>;
    case '/Home/Search':
      return <Searchbar />
    case '/Home/Library':
      return <div>Library Header</div>;
    default:
      return <div>Default Header</div>;
  }
}

export default Outletbar

