import React from 'react';

const Timer = ({seconds, mode}) =>{

    const displayTimer = () => {
        const mins = (seconds / 60) < 10 ? "0" + Math.floor(seconds / 60) : Math.floor(seconds / 60)

        const secs = (seconds % 60) < 10 ? "0" + seconds % 60 : seconds % 60

        return `${mins}:${secs}`
    }

    return (
        <div id="timer-container">
            <div id="timer">
                <h2 id="timer-label">{mode === true ? "SESSION" : "BREAK"}</h2>
                <div id="time-left">
                    {displayTimer()}
                </div>
            </div>
            
        </div>
    )
}
export default Timer;