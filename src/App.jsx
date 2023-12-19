import axios from 'axios';
import './App.css'

import useSpotifyAuth from './hooks/useSpotifyAuth';


function App({code}) {

  const accessToken = useSpotifyAuth(code);


  return (
    <div>
      <button
        onClick={() => {
          axios
            .post('http://127.0.0.1:5001/spotify1-25293/us-central1/helloWorld')
            .then((res) => {
              console.log(res.data)
            })
            .catch((err) => {
              console.log('login err', err)
            });
        }}
      >Hello World</button>

      <div style={{color: 'white'}}>{accessToken}</div>
    </div>

  )
}

export default App
