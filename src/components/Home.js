import React from 'react';

function Home({ setScreen }) {
  return (
    <div className="page">
      <h1>Guitar Trainer</h1>
      <button onClick={() => setScreen('single note')}>Single Note</button>
      <button onClick={() => setScreen('single scale')}>Single Scale</button>
      <button onClick={() => setScreen('progression')}>Progression</button>
    </div>
  )
}

export default Home;
