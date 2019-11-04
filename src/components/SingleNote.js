import React, { useEffect, useRef, useState } from 'react'
import { notes } from '../consts'
import { getRandomFrom, randUpTo } from '../helper'
import BackButton from './BackButton'
import SpeedSelect from './SpeedSelection'

function SingleNote({ back }) {
    const [ note, setNote ] = useState(getRandomFrom(notes))
    const [ fret, setFret ] = useState(randUpTo(20))
    const [ playing, setPlaying ] = useState(true)
    const [ intervalLength, setIntervalLength ] = useState(4000)
    const noteItv = useRef()
    const redButtonClass = playing ? 'button-red' : 'button-red button-red-highlight'
    
    useEffect(() => {
        if (playing) {
            noteItv.current = setInterval(() => {
                setNote(getRandomFrom(notes))
            }, intervalLength)
        }
        
        return () => {
            clearInterval(noteItv.current) 
        }
    }, [playing, intervalLength])


    function handleTimeChange(e) {
        const inter = Number(e.target.value)

        if (inter > 0) {
            setIntervalLength(inter)
        }
    }

    return (
        <div className="page">
            <div className="header">
                <BackButton back={back} />
                <h1>Single Note</h1>
            </div>
            <button className={redButtonClass} onClick={() => setPlaying(!playing) }>{note}</button>
            <button className="button-blue" onClick={() => setFret(randUpTo(20))}>Frets: {fret} - {fret + 3}</button>
            <SpeedSelect />
        </div>
    )
}

export default SingleNote
