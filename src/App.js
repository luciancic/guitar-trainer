import React, { Fragment, useState } from 'react'
import SingleNote from './components/SingleNote'
import SingleScale from './components/SingleScale'
import Progression from './components/Progression'
import './App.scss'


function App() {
  const [ screen, setScreen ] = useState('home')

  const back = () => setScreen('home')

  return (
    <div className='app'>
      { screen === 'home' && <Fragment>
        <h1>Guitar Trainer</h1>
        <button onClick={() => setScreen('single note')}>Single Note</button>
        <button onClick={() => setScreen('single scale')}>Single Scale</button>
        <button onClick={() => setScreen('progression')}>Progression</button>
      </Fragment>
      } 
      { screen === 'single note' && <SingleNote back={back} />}
      { screen === 'single scale' && <SingleScale back={back} />}
      { screen === 'progression' && <Progression back={back} />}
    </div>
  );
}

export default App;
