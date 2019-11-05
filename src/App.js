import React, { useState } from 'react'
import {CSSTransition} from 'react-transition-group'
import Home from './components/Home'
import SingleNote from './components/SingleNote'
import SingleScale from './components/SingleScale'
import Progression from './components/Progression'
import './App.scss'

function App() {
  const [ screen, setScreen ] = useState('home')
  const [ nextScreen, setNextScreen ] = useState('home')

  const back = () => setNextScreen('home')
  const shouldRender = (screenName) => screen === nextScreen && screen === screenName
  const onExited = () => setScreen(nextScreen)

  return (
    <div className='app'>
      <CSSTransition in={shouldRender('home')} classNames="page" timeout={600} unmountOnExit onExited={onExited}>
        <Home setScreen={setNextScreen} />
      </CSSTransition>
      <CSSTransition in={shouldRender('single note')} classNames="page" timeout={600} unmountOnExit onExited={onExited}>
        <SingleNote back={back} />
      </CSSTransition>
      <CSSTransition in={shouldRender('single scale')} classNames="page" timeout={600} unmountOnExit onExited={onExited}>
        <SingleScale back={back} />
      </CSSTransition>
      <CSSTransition in={shouldRender('progression')} classNames="page" timeout={600} unmountOnExit onExited={onExited}>
        <Progression back={back} />
      </CSSTransition>
    </div>
  );
}

export default App;
