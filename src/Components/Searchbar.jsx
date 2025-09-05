import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Searchbar() {
  const [ query, setQuery ] = useState('');
  const [ radio, setRadio ] = useState('artist');
  const [ , setSearchParams ] = useSearchParams();

  const submit = () => setSearchParams({ q: query, type: radio });
  const handleKeyDown = (event) => { if (event.key === 'Enter') submit(); }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, alignItems: 'center' }}>
      <div className="subnav-group" role="radiogroup" aria-label="Search type">
        <div className="subnav-legend">Search type</div>
        <div className="subnav">
          <button
            className={`subnav-link${radio==='artist' ? ' active' : ''}`}
            onClick={() => setRadio('artist')}
            role="radio"
            aria-checked={radio==='artist'}
            title="Search by artists"
          >👤 Artists</button>
          <button
            className={`subnav-link${radio==='track' ? ' active' : ''}`}
            onClick={() => setRadio('track')}
            role="radio"
            aria-checked={radio==='track'}
            title="Search by songs"
          >🎵 Songs</button>
          <button
            className={`subnav-link${radio==='genre' ? ' active' : ''}`}
            onClick={() => setRadio('genre')}
            role="radio"
            aria-checked={radio==='genre'}
            title="Search by genres"
          >🏷️ Genres</button>
        </div>
      </div>
      <div>
        <label className="subnav-legend" htmlFor="search-input">Search query</label>
        <input
          id="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Search ${radio}s`}
          style={{
            width: '100%', height: 40, padding: '0 12px',
            borderRadius: '10px', border: '1px solid var(--border)',
            background: 'var(--panel-2)', color: 'var(--text)'
          }}
          aria-label="Search input"
        />
      </div>
    </div>
  )
}

export default Searchbar
