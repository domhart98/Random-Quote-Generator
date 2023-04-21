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
                <button className="crement-button" id="session-decrement" onClick={decrementSession}>
                    <img className="control-button" src="./subtract-icon.png" alt=""/>
                </button>
                <div className="length-display" id="session-length">
                    <p>{length}</p>
                </div>
                <button className="crement-button" id="session-increment" onClick={incrementSession}>
                    <img className="control-button" src="./add-icon.png" alt=""/>
                </button>
            </div>
        </div>
    )
}
export default Session ;