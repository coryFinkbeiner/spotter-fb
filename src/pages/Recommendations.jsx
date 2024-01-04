import React, { useState } from 'react';

const sliderStyle = {
  backgroundColor: 'darkBlue',
  display: 'grid',
  gridTemplateColumns: '4fr 1fr 1fr 1fr',
  height: '38px',
  gridGap: '5px'
}


function Recommendations() {
  const [ minAcousticness, setMinAcousticness ] = useState(null);
  const [ maxAcousticness, setMaxAcousticness ] = useState(null);
  const [ targetAcousticness, setTargetAcousticness ] = useState(null);

  const [ minDanceability, setMinDanceability ] = useState(null);
  const [ maxDanceability, setMaxDanceability ] = useState(null);
  const [ targetDanceability, setTargetDanceability ] = useState(null);

  const [ minDuration, setMinDuration ] = useState(null);
  const [ maxDuration, setMaxDuration ] = useState(null);
  const [ targetDuration, setTargetDuration ] = useState(null);

  const [ minEnergy, setMinEnergy ] = useState(null);
  const [ maxEnergy, setMaxEnergy ] = useState(null);
  const [ targetEnergy, setTargetEnergy ] = useState(null);

  const [ minInstrumentalness, setMinInstrumentalness ] = useState(null);
  const [ maxInstrumentalness, setMaxInstrumentalness ] = useState(null);
  const [ targetInstrumentalness, setTargetInstrumentalness ] = useState(null);

  const [ minKey, setMinKey ] = useState(null);
  const [ maxKey, setMaxKey ] = useState(null);
  const [ targetKey, setTargetKey ] = useState(null);

  const [ minLiveness, setMinLiveness ] = useState(null);
  const [ maxLiveness, setMaxLiveness ] = useState(null);
  const [ targetLiveness, setTargetLiveness ] = useState(null);

  const [ minLoudness, setMinLoudness ] = useState(null);
  const [ maxLoudness, setMaxLoudness ] = useState(null);
  const [ targetLoudness, setTargetLoudness ] = useState(null);

  const [ minMode, setMinMode ] = useState(null);
  const [ maxMode, setMaxMode ] = useState(null);
  const [ targetMode, setTargetMode ] = useState(null);

  const [ minPopularity, setMinPopularity ] = useState(null);
  const [ maxPopularity, setMaxPopularity ] = useState(null);
  const [ targetPopularity, setTargetPopularity ] = useState(null);

  const [ minSpeechiness, setMinSpeechiness ] = useState(null);
  const [ maxSpeechiness, setMaxSpeechiness ] = useState(null);
  const [ targetSpeechiness, setTargetSpeechiness ] = useState(null);

  const [ minTempo, setMinTempo ] = useState(null);
  const [ maxTempo, setMaxTempo ] = useState(null);
  const [ targetTempo, setTargetTempo ] = useState(null);

  // const [ min, setMin ] = useState(null);
  // const [ max, setMax ] = useState(null);
  // const [ target, setTarget ] = useState(null);

  // const [ min, setMin ] = useState(null);
  // const [ max, setMax ] = useState(null);
  // const [ target, setTarget ] = useState(null);




  return (
    <div
      style={{
        backgroundColor: 'red',
        display: 'grid',
        gridTemplateRows: '.65fr 8fr',
      }}
    >
      <div
        style={{
          backgroundColor: 'grey',
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr 1fr 1fr 1fr 1fr',
        }}
      >
        <div>get rec</div>
        <div>1/add</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '1fr 20fr',
        }}
      >
        <div
          style={{
            backgroundColor: 'black',
            display: 'grid',
            gridTemplateColumns: '4fr 1fr 1fr 1fr',

          }}
        >
          <div>attribute</div>
          <div>min</div>
          <div>max</div>
          <div>target</div>

        </div>

        {/* slider / scroll container */}
        <div
          style={{
            backgroundColor: 'brown',
          }}
        >

          <div style={sliderStyle}>
            <div>Acousticness</div>
            <textarea style={{ resize: 'none', }}
              placeholder='0'
              onChange={(e) => setMinAcousticness(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              placeholder='100'
              onChange={(e) => setMaxAcousticness(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              onChange={(e) => setTargetAcousticness(event.target.value)}
            />
          </div>


          <div style={sliderStyle}>
            <div>Danceability</div>
            <textarea style={{ resize: 'none', }}
              placeholder='0'
              onChange={(e) => setMinDanceability(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              placeholder='100'
              onChange={(e) => setMaxDanceability(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              onChange={(e) => setTargetDanceability(event.target.value)}
            />
          </div>

          <div style={sliderStyle}>
            <div>Duration (seconds)</div>
            <textarea style={{ resize: 'none', }}
              onChange={(e) => setMinDuration(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              onChange={(e) => setMaxDuration(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              onChange={(e) => setTargetDuration(event.target.value)}
            />
          </div>

          <div style={sliderStyle}>
            <div>Energy</div>
            <textarea style={{ resize: 'none', }}
              placeholder='0'
              onChange={(e) => setMinEnergy(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              placeholder='100'
              onChange={(e) => setMaxEnergy(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              onChange={(e) => setTargetEnergy(event.target.value)}
            />
          </div>

          <div style={sliderStyle}>
            <div>Instrumentalness</div>
            <textarea style={{ resize: 'none', }}
              placeholder='0'
              onChange={(e) => setMinInstrumentalness(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              placeholder='100'
              onChange={(e) => setMaxInstrumentalness(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              onChange={(e) => setTargetInstrumentalness(event.target.value)}
            />
          </div>

          <div style={sliderStyle}>
            <div>Key</div>
            <textarea style={{ resize: 'none', }}
              placeholder='0'
              onChange={(e) => setMinKey(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              placeholder='11'
              onChange={(e) => setMaxKey(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              onChange={(e) => setTargetKey(event.target.value)}
            />
          </div>

          <div style={sliderStyle}>
            <div>Liveness</div>
            <textarea style={{ resize: 'none', }}
              placeholder='0'
              onChange={(e) => setMinLiveness(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              placeholder='100'
              onChange={(e) => setMaxLiveness(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              onChange={(e) => setTargetLiveness(event.target.value)}
            />
          </div>

          <div style={sliderStyle}>
            <div>Loudness</div>
            <textarea style={{ resize: 'none', }}
              placeholder='?'
              onChange={(e) => setMinLoudness(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              placeholder='?'
              onChange={(e) => setMaxLoudness(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              onChange={(e) => setTargetLoudness(event.target.value)}
            />
          </div>

          <div style={sliderStyle}>
            <div>Mode</div>
            <textarea style={{ resize: 'none', }}
              placeholder='0'
              onChange={(e) => setMinMode(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              placeholder='100'
              onChange={(e) => setMaxMode(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              onChange={(e) => setTargetMode(event.target.value)}
            />
          </div>

          <div style={sliderStyle}>
            <div>Popularity</div>
            <textarea style={{ resize: 'none', }}
              placeholder='0'
              onChange={(e) => setMinPopularity(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              placeholder='100'
              onChange={(e) => setMaxPopularity(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              onChange={(e) => setTargetPopularity(event.target.value)}
            />
          </div>

          <div style={sliderStyle}>
            <div>Speechiness</div>
            <textarea style={{ resize: 'none', }}
              placeholder='0'
              onChange={(e) => setMinSpeechiness(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              placeholder='100'
              onChange={(e) => setMaxSpeechiness(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              onChange={(e) => setTargetSpeechiness(event.target.value)}
            />
          </div>

          <div style={sliderStyle}>
            <div>Tempo (bpm)</div>
            <textarea style={{ resize: 'none', }}
              placeholder='0'
              onChange={(e) => setMinTempo(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              placeholder='100'
              onChange={(e) => setMaxTempo(event.target.value)}
            />
            <textarea style={{ resize: 'none', }}
              onChange={(e) => setTargetTempo(event.target.value)}
            />
          </div>



        </div>

      </div>
    </div>
  )
}

export default Recommendations