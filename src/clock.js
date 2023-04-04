import './clock.css'
import React, {useState, useEffect, useRef} from 'react'
import Break from './break'
import Session from './session'
import Timer from './timer'
import sound from './mixkit-short-rooster-crowing-2470.wav'

function Clock() {
    const [breakLength, setBreakLength] = useState(1)
    const [sessionLength, setSessionLength] = useState(1)
    const [seconds, setSeconds] = useState(sessionLength*60)
    const [mode, setMode] = useState(true) //true="session", false="break"
    const [intervalId, setIntervalId] = useState(undefined)
    const audio = useRef(undefined)

    const start = () =>{
        //if countdown does not exist, create interval. Otherwise, clear interval. 
        if(!intervalId){
            
            const newIntervalId = setInterval(() => {
                
                setSeconds((seconds) => {
                    const newSeconds = seconds - 1
                    if(seconds >= 0) {
                        return newSeconds
                    }
                })

            }, 1000)
            setIntervalId(newIntervalId)
        }
        else{
            clearInterval(intervalId)
            setIntervalId(undefined)
        }
        

    }
    const reset = () =>{
        audio.current.load()
        setBreakLength(5)
        setSessionLength(25)
        setSeconds(25*60)
        setMode(true)
        clearInterval(intervalId)
        setIntervalId(undefined)
    }

    useEffect (() => {
        if(seconds === -1){
            audio.current.play()
            if(mode){
                setSeconds(breakLength * 60)
                setMode((mode) => !mode)
            }   
            else{
                setSeconds(sessionLength * 60)
                setMode((mode) => !mode)
            }
        }
    },[breakLength, sessionLength, mode, seconds])

    return(
        <div id="clock">
            <div className="row increment-container">
                <Session className="col-6" length={sessionLength} setLength={setSessionLength} setSeconds={setSeconds}/>
                <Break className="col-6" length={breakLength} setLength={setBreakLength} setSeconds={setSeconds}/>
            </div>
            
            <Timer seconds={seconds} mode={mode}/>
            <button id="reset" onClick={reset}>reset</button>
            <button id="start_stop" onClick={start}>start/stop</button>
            <audio id="beep" ref={audio}>
                <source src={sound}/>
            </audio>
        </div>
    )
}
export default Clock;