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
        <div id="break-container">
            <div className="increment-label" id="button-label"> BUTTON LENGTH</div>
            <div className="increment-row">
                <a className="increment-button" id="break-decrement" onClick={decrementBreak}>
                    <img className="control-button" src="./subtract-icon.png" alt=""/>
                </a>
                <div className="length-display" id="button-length">
                    <p>{length}</p>
                </div>
                <a className="decrement-button" id="break-increment" onClick={incrementBreak}>
                    <img className="control-button" src="./add-icon.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
export default Break;