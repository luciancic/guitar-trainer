import React, { useEffect, useRef, useState } from 'react'
import { notes } from '../consts'
import { getRandomFrom, randUpTo } from '../helper'

function SingleNote({ back }) {
    const [ note, setNote ] = useState(getRandomFrom(notes))
    const [ fret, setFret ] = useState(randUpTo(20))
    const [ playing, setPlaying ] = useState(true)
    const [ intervalLength, setIntervalLength ] = useState(4000)
    const noteItv = useRef();
    
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
        <div>
            <h1>Single Note</h1>
            <div>
                Note: {note}
                <button onClick={() => setPlaying(!playing) }>{ playing ? 'Pause' : 'Resume' }</button>
            </div>
            <div>
                Frets: {fret} - {fret + 3}
                <button onClick={() => setFret(randUpTo(20))}>Change Frets</button>
            </div>
            <div>
                Change Speed (ms):
                <input 
                    onChange={handleTimeChange} 
                    value={intervalLength} 
                    type='number' 
                    min='1000' 
                    max='6000' />
            </div>
            <button onClick={back}>Back</button>
        </div>
    )
}

export default SingleNote
