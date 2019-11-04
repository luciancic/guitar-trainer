import React, { useEffect, useRef, useState } from 'react'
import { notes } from '../consts'
import { getRandomFrom, randUpTo } from '../helper'
import BackButton from './BackButton'

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
            <div className="speed-form">
                <label>Slow</label>
                <label>Fast</label>
                <fieldset>
                    <div>
                        <input type="radio" name="speed" value="1000" id="radio1"/>
                        <label for="radio1"></label>
                    </div>
                    <div>
                        <input type="radio" name="speed" value="1500" id="radio2"/>
                        <label for="radio2"></label>
                    </div>
                    <div>
                        <input type="radio" name="speed" value="2000" id="radio3"/>
                        <label for="radio3"></label>
                    </div>
                    <div>
                        <input type="radio" name="speed" value="3500" id="radio4"/>
                        <label for="radio4"></label>
                    </div>
                    <div>
                        <input type="radio" name="speed" value="5000"  id="radio5"/>
                        <label for="radio5"></label>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}

export default SingleNote
