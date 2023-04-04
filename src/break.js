import React from 'react'

function Break ({length, setLength, setSeconds}) {
    const incrementBreak = () =>{
        const newLength = length + 1
        if(length < 60){
            setLength(newLength)
        }
    }
    const decrementBreak = () =>{
        const newLength = length - 1
        if(length > 1){
            setLength(newLength)

        }
    }
    return(
        <div className="col-6" id="break-container">
            <div id="break-label">Break length</div>
            <div className="row">
                <button className="col-4" id="break-decrement" onClick={decrementBreak}>-</button>
                <div className="col-4" id="break-length">{length}</div>
                <button className="col-4" id="break-increment" onClick={incrementBreak}>+</button>
            </div>
        </div>
    )
}
export default Break;