import React, { useState } from 'react'
import { getRandomKey } from 'guitar-trainer-lib'
import BackButton from './BackButton'

function SingleScale({ back }) {
    const [ key, setKey ] = useState(getRandomKey())

    return (
        <div className="page">
            <div className="header">
                <BackButton back={back} />
                <h1>Single Scale</h1>
            </div>
            <button className="button-red" onClick={() => setKey(getRandomKey())}>{key}</button>
            <button className="button-small" onClick={() => setKey(getRandomKey())}>Next</button>
        </div>
    )
}

export default SingleScale
