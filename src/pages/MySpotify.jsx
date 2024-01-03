import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import LibrarySide from '../components/LibrarySide';
import RecSide from '../components/RecSide';
import SearchSide from '../components/SearchSide';

function MySpotify({ children }) {
  const location = useLocation();

  // could turn this into a Library function
  const renderSideComponent = () => {
    switch (location.pathname) {
      case '/spotify':
        return <LibrarySide />;
      case '/spotify/recommendations':
        return <RecSide />;
      case '/spotify/search':
        return <SearchSide />;
      default:
        return null; // You can provide a default component or handle unknown routes as needed
    }
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.41fr',
      }}
    >
      <div>
        <div
          style={{
            backgroundColor: 'black',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
          }}
        >
          <NavLink to="/spotify" style={{ textDecoration: 'none', color: 'white' }}>
            <div>Home</div>
          </NavLink>
          <NavLink to="/spotify/recommendations" style={{ textDecoration: 'none', color: 'white' }}>
            <div>Get Rec</div>
          </NavLink>
          <NavLink to="/spotify/search" style={{ textDecoration: 'none', color: 'white' }}>
            <div>Search</div>
          </NavLink>
        </div>
        {renderSideComponent()}
      </div>
      <Outlet />
    </div>
  )
}

export default MySpotify