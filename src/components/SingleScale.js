import React, { useState } from 'react'
import { keys } from '../consts'
import { getRandomFrom } from '../helper'

function SingleScale({ back }) {
    const [ key, setKey ] = useState(getRandomFrom(keys))

    return (
        <div>
            <h1>Single Scale</h1>
            <div>Scale: {key}</div>
            <button onClick={() => setKey(getRandomFrom(keys))}>Next</button>
            <button onClick={back}>Back</button>
        </div>
    )
}

export default SingleScale