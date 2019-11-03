import React, { useState } from 'react'
import { keys } from '../consts'
import { getRandomFrom } from '../helper'

function SingleScale({ back }) {
    const [ key, setKey ] = useState(getRandomFrom(keys))

    return (
        <div className="page">
            <h1>Single Scale</h1>
            <button className="button-red" onClick={() => setKey(getRandomFrom(keys))}>{key}</button>
            <button onClick={back}>Back</button>
        </div>
    )
}

export default SingleScale
