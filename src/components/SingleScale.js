import React, { useState } from 'react'
import { keys } from '../consts'
import { getRandomFrom } from '../helper'
import BackButton from './BackButton'

function SingleScale({ back }) {
    const [ key, setKey ] = useState(getRandomFrom(keys))

    return (
        <div className="page">
            <div className="header">
                <BackButton back={back} />
                <h1>Single Scale</h1>
            </div>
            <button className="button-red" onClick={() => setKey(getRandomFrom(keys))}>{key}</button>
            <button onClick={() => setKey(getRandomFrom(keys))}>Next</button>
        </div>
    )
}

export default SingleScale
