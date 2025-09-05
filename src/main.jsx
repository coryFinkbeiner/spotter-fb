import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SpotifyLogin from './pagesX/SpotifyLogin';
import './index.css';
import './styles.css';
import { DataProvider } from './DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
const code = new URLSearchParams(window.location.search).get('code');
// console.log({code})


root.render(
  <React.StrictMode>
    {code ? (
      <DataProvider code={code} >
        <App />
      </DataProvider>
    ) : (
      <SpotifyLogin />
    )}
  </React.StrictMode>
);
