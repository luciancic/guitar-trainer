import React, { useState } from 'react'
import { keys, progressions } from '../consts'
import { getRandomFrom } from '../helper'
import BackButton from './BackButton'

function Progression({ back }) {
    const [ key, setKey ] = useState(getRandomFrom(keys))
    const [ progression, setProgression ] = useState(getRandomFrom(progressions))

    function next() {
        setKey(getRandomFrom(keys))
        setProgression(getRandomFrom(progressions))
    }

    return (
        <div className="page">
            <div className="header">
                <BackButton back={back} />
                <h1>Progressions</h1>
            </div>
            <button className="button-red">{key}</button>
            <button className="button-blue">{progression}</button>
            <button onClick={next}>Next</button>
        </div>
    )
}

export default Progression
