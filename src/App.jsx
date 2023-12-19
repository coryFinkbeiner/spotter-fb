import axios from 'axios';
import './App.css'

function App({code}) {


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

      <div style={{color: 'white'}}>{code}</div>
    </div>

  )
}

export default App
