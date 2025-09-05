import React from 'react'
import { useLocation } from 'react-router-dom';
import Searchbar from './Searchbar'
import Settingsbar from './Settingsbar'
import Librarybar from './Librarybar'

function Outletbar() {
  const location = useLocation();

  const path = location.pathname;

  if (path.startsWith('/Home/Library')) return <Librarybar />;
  if (path.startsWith('/Home/Search')) return <Searchbar />;
  if (path.startsWith('/Home/Settings')) return <Settingsbar />;

  return <div className="muted">Welcome</div>;
}

export default Outletbar
