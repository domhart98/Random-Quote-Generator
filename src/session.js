import React from 'react'

function Session ({length, setLength, setSeconds}){
    const incrementSession = () =>{
        const newLength = length + 1
        if(length < 60){
            setLength((length) => length+1)
            setSeconds(newLength * 60)
        }
    }
    const decrementSession = () =>{
        const newLength = length - 1
        if(length > 1){
            setLength((length) => length-1)
            setSeconds(newLength * 60)
        }
    }
    return(
        <div id="session-container">
            <div className="increment-label" id="session-label"> SESSION LENGTH</div>
            <div className="increment-row">
                <a className="increment-button" id="session-decrement" onClick={decrementSession}>
                    <img className="control-button" src="./subtract-icon.png" alt=""/>
                </a>
                <div className="length-display" id="session-length">
                    <p>{length}</p>
                </div>
                <a className="decrement-button" id="session-increment" onClick={incrementSession}>
                    <img className="control-button" src="./add-icon.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
export default Session ;