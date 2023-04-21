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
                <button className="crement-button" id="break-decrement" onClick={decrementBreak}>
                    <img className="control-button" src="./subtract-icon.png" alt=""/>
                </button>
                <div className="length-display" id="button-length">
                    <p>{length}</p>
                </div>
                <button className="crement-button" id="break-increment" onClick={incrementBreak}>
                    <img className="control-button" src="./add-icon.png" alt=""/>
                </button>
            </div>
        </div>
    )
}
export default Break;