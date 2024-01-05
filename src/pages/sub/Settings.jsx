import React, { useState } from 'react';

const sliderStyle = {
  backgroundColor: 'darkBlue',
  display: 'grid',
  gridTemplateColumns: '4fr 1fr 1fr 1fr',
  height: '38px',
  gridGap: '5px'
}

const SliderElement = ({ attributeName, placeholderMin = 0, placeholderMax = 100, setMin, setMax, setTarget }) => {
  return (
    <div style={sliderStyle}>
      <div>{attributeName}</div>
      <textarea
        style={{ resize: 'none' }}
        placeholder={placeholderMin}
        onChange={(e) => setMin(e.target.value)}
      />
      <textarea
        style={{ resize: 'none' }}
        placeholder={placeholderMax}
        onChange={(e) => setMax(e.target.value)}
      />
      <textarea
        style={{ resize: 'none' }}
        onChange={(e) => setTarget(e.target.value)}
      />
    </div>
  );
};

function Settings() {

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

  const [ minTimeSignature, setMinTimeSignature ] = useState(null);
  const [ maxTimeSignature, setMaxTimeSignature ] = useState(null);
  const [ targetTimeSignature, setTargetTimeSignature ] = useState(null);

  const [ minValence, setMinValence ] = useState(null);
  const [ maxValence, setMaxValence ] = useState(null);
  const [ targetValence, setTargetValence ] = useState(null);



  return (

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
      <div
        style={{
          backgroundColor: 'brown',
        }}
      >

        <SliderElement
          attributeName="Acousticness"
          placeholderMin={0}
          placeholderMax={100}
          setMin={setMinAcousticness}
          setMax={setMaxAcousticness}
          setTarget={setTargetAcousticness}
        />

        <SliderElement
          attributeName="Danceability"
          placeholderMin={0}
          placeholderMax={100}
          setMin={setMinDanceability}
          setMax={setMaxDanceability}
          setTarget={setTargetDanceability}
        />

        <SliderElement
          attributeName="Duration (seconds)"
          setMin={setMinDuration}
          setMax={setMaxDuration}
          setTarget={setTargetDuration}
        />

        <SliderElement
          attributeName="Energy"
          placeholderMin={0}
          placeholderMax={100}
          setMin={setMinEnergy}
          setMax={setMaxEnergy}
          setTarget={setTargetEnergy}
        />

        <SliderElement
          attributeName="Instrumentalness"
          placeholderMin={0}
          placeholderMax={100}
          setMin={setMinInstrumentalness}
          setMax={setMaxInstrumentalness}
          setTarget={setTargetInstrumentalness}
        />

        <SliderElement
          attributeName="Key"
          placeholderMin={0}
          placeholderMax={11}
          setMin={setMinKey}
          setMax={setMaxKey}
          setTarget={setTargetKey}
        />

        <SliderElement
          attributeName="Liveness"
          placeholderMin={0}
          placeholderMax={100}
          setMin={setMinLiveness}
          setMax={setMaxLiveness}
          setTarget={setTargetLiveness}
        />

        <SliderElement
          attributeName="Loudness"
          setMin={setMinLoudness}
          setMax={setMaxLoudness}
          setTarget={setTargetLoudness}
        />

        <SliderElement
          attributeName="Mode"
          placeholderMin={0}
          placeholderMax={100}
          setMin={setMinMode}
          setMax={setMaxMode}
          setTarget={setTargetMode}
        />

        <SliderElement
          attributeName="Popularity"
          placeholderMin={0}
          placeholderMax={100}
          setMin={setMinPopularity}
          setMax={setMaxPopularity}
          setTarget={setTargetPopularity}
        />

        <SliderElement
          attributeName="Speechiness"
          placeholderMin={0}
          placeholderMax={100}
          setMin={setMinSpeechiness}
          setMax={setMaxSpeechiness}
          setTarget={setTargetSpeechiness}
        />

        <SliderElement
          attributeName="Tempo (bpm)"
          placeholderMin={0}
          placeholderMax={100}
          setMin={setMinTempo}
          setMax={setMaxTempo}
          setTarget={setTargetTempo}
        />

        <SliderElement
          attributeName="Time Signature"
          placeholderMin={0}
          placeholderMax={11}
          setMin={setMinTimeSignature}
          setMax={setMaxTimeSignature}
          setTarget={setTargetTimeSignature}
        />

        <SliderElement
          attributeName="Valence"
          placeholderMin={0}
          placeholderMax={11}
          setMin={setMinValence}
          setMax={setMaxValence}
          setTarget={setTargetValence}
        />

      </div>
    </div>


  )
}

export default Settings