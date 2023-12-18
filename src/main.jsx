import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SpotifyLogin from './pages/SpotifyLogin';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

const code = new URLSearchParams(window.location.search).get('code');

root.render(
  <React.StrictMode>
    {code ? (
      <App code={code}/>
    ) : (
      <SpotifyLogin />
    )}
  </React.StrictMode>
);