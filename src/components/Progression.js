import React, { useState } from 'react'
import { keys, progressions } from '../consts'
import { getRandomFrom } from '../helper'

function Progression({ back }) {
    const [ key, setKey ] = useState(getRandomFrom(keys))
    const [ progression, setProgression ] = useState(getRandomFrom(progressions))

    function next() {
        setKey(getRandomFrom(keys))
        setProgression(getRandomFrom(progressions))
    }

    return (
        <div>
            <h1>Progressions</h1>
            <div>Key: {key}</div>
            <div>Progression: {progression}</div>
            <button onClick={next}>Next</button>
            <button onClick={back}>Back</button>
        </div>
    )
}

export default Progression
