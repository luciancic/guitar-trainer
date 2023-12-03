import React, { useState } from 'react';
import { getRandomKey, getRandomProgression } from 'guitar-trainer-lib';
import BackButton from './BackButton';

function Progression({ back }) {
  const [key, setKey] = useState(getRandomKey());
  const [progression, setProgression] = useState(getRandomProgression());

  function next() {
    setKey(getRandomKey());
    setProgression(getRandomProgression());
  }

  return (
    <div className="page">
      <div className="header">
        <BackButton back={back} />
        <h1>Progressions</h1>
      </div>
      <button className="button-red">{key}</button>
      <button className="button-blue">{progression}</button>
      <button className="button-small" onClick={next}>
        Next
      </button>
    </div>
  );
}

export default Progression;
