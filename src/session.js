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
        <div className="col-6" id="session-container">
            <div id="session-label"> Session length</div>
            <div className="row">
                <button className="col-4" id="session-decrement" onClick={decrementSession}>-</button>
                <div className="col-4" id="session-length">{length}</div>
                <button className="col-4" id="session-increment" onClick={incrementSession}>+</button>
            </div>
        </div>
    )
}
export default Session ;