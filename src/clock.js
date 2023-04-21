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
            <h1>POMODORO CLOCK</h1>
            <div id="increment-container">
                <Session length={sessionLength} setLength={setSessionLength} setSeconds={setSeconds}/>
                <Break length={breakLength} setLength={setBreakLength} setSeconds={setSeconds}/>
            </div>
            
            <Timer seconds={seconds} mode={mode}/>

            <div id="buttons-container">
                <div id="start-stop" onClick={start}>
                    <img className="controls" src="./start-stop-icon.png" alt=""/>
                </div>
                <div id="reset" onClick={reset}>
                    <img className="controls" src="./reset-icon.png" alt=""/>
                </div>
            </div>
            
            <audio id="beep" ref={audio}>
                <source src={sound}/>
            </audio>
        </div>
    )
}
export default Clock;