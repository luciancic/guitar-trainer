import React, { useEffect, useRef, useState } from 'react'
import { getRandomNote } from 'guitar-trainer-lib'
import BackButton from './BackButton'
import SpeedSelect from './SpeedSelection'

function randUpTo(int) {
    return int;
}

function SingleNote({ back }) {
    const [ note, setNote ] = useState(getRandomNote())
    const [ fret, setFret ] = useState(randUpTo(20))
    const [ playing, setPlaying ] = useState(true)
    const [ intervalLength, setIntervalLength ] = useState(2000)
    const noteItv = useRef()
    const redButtonClass = playing ? 'button-red' : 'button-red button-red-highlight'
    
    useEffect(() => {
        if (playing) {
            noteItv.current = setInterval(() => {
                setNote(getRandomNote())
            }, intervalLength)
        }
        
        return () => {
            clearInterval(noteItv.current) 
        }
    }, [playing, intervalLength])

    return (
        <div className="page">
            <div className="header">
                <BackButton back={back} />
                <h1>Single Note</h1>
            </div>
            <button className={redButtonClass} onClick={() => setPlaying(!playing) }>{note}</button>
            <button className="button-blue" onClick={() => setFret(randUpTo(20))}>Frets: {fret} - {fret + 3}</button>
            <SpeedSelect handleChange={setIntervalLength}/>
        </div>
    )
}

export default SingleNote
