import React, { useState } from 'react'
import Home from './components/Home'
import SingleNote from './components/SingleNote'
import SingleScale from './components/SingleScale'
import Progression from './components/Progression'
import './App.scss'


function App() {
  const [ screen, setScreen ] = useState('home')

  const back = () => setScreen('home')

  return (
    <div className='app'>
      { screen === 'home' && <Home setScreen={setScreen} />} 
      { screen === 'single note' && <SingleNote back={back} />}
      { screen === 'single scale' && <SingleScale back={back} />}
      { screen === 'progression' && <Progression back={back} />}
    </div>
  );
}

export default App;
