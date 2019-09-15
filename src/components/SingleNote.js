import React, { useEffect, useRef, useState } from 'react'
import { notes } from '../consts'
import { getRandomFrom, randUpTo } from '../helper'

function SingleNote({ back }) {
    const [ note, setNote ] = useState(getRandomFrom(notes))
    const [ fret, setFret ] = useState(randUpTo(20))
    const [ playing, setPlaying ] = useState(true)
    const noteItv = useRef();
    const fretItv = useRef();
    
    useEffect(() => {
        if (playing) {
            noteItv.current = setInterval(() => {
                setNote(getRandomFrom(notes))
            }, 2000)
            fretItv.current = setInterval(() => {
                setFret(randUpTo(20))
            }, 8000)
        }
        
        return () => {
            clearInterval(noteItv.current)
            clearInterval(fretItv.current) 
        }
    }, [playing])


    return (
        <div>
            <h1>Single Note</h1>
            <div>Note: {note}</div>
            <div>Frets: {fret} - {fret + 4}</div>
            { playing ? <button onClick={() => { setPlaying(false) }}>Pause</button> :
            <button onClick={() => { setPlaying(true) }}>Resume</button> }
            <button onClick={back}>Back</button>
        </div>
    )
}

export default SingleNote
