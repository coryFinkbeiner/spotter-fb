import React from 'react'
import { useLocation } from 'react-router-dom';
import Searchbar from './Searchbar'
import Settingsbar from './Settingsbar'
import Librarybar from './Librarybar'

function Outletbar() {
  const location = useLocation();

  if (location.pathname.startsWith('/Home/Library')) {
    return <Librarybar />;
  }


  // Render different content based on the current route
  switch(location.pathname) {
    case '/Home/Settings':
      return <Settingsbar />
    case '/Home/Search':
      return <Searchbar />
    default:
      return <div>Default Header</div>;
  }
}

export default Outletbar

