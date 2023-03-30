import React, {useState} from 'react'
import * as math from 'mathjs'
import './calculator.css'

const Calculator = () => {
    const [equation, setEquation] = useState(["0"])
    const [isDecimal, setIsDecimal] = useState(false)
    const [beginsWithZero, setBeginsWithZero] = useState(true)
    const [consecutiveOperators, setConsecutiveOperators] = useState(false)
    
    const handleNumericButtonPress = (e) =>{

        if(e.target.innerText === "0"){
            if(beginsWithZero){
                console.log("number cannot begin with consecutive zeros")
            }
            else{
                setEquation(current => [...current, e.target.innerText])
                setBeginsWithZero(false)
                setConsecutiveOperators(false)
            }
            
        }

        if(e.target.innerText === '.') {
            if(isDecimal){
                console.log('cannot have multiple decimal points in a number, bitch')
            }
            else{
                setIsDecimal(true)
                setEquation(current => [...current, e.target.innerText])
            }
            
        }
        else{
            if(equation.length === 1 && equation[0] === "0"){
                setEquation(current => [e.target.innerText])
            }
            
            else{
                setEquation(current => [...current, e.target.innerText])
            }
            
        }
        console.log(equation)
        
    }
    const handleFunctionButtonPress = (e) =>{
        setIsDecimal(false)
    
        const regex = /(\+|\*|\/)/;
        if(e.target.innerText.match(regex)){
            if(['+', '*', '/'].includes(equation[equation.length-1])){
                setEquation(current => [...current.slice(0, -1), `${e.target.innerText}`])
            }
            else if(equation[equation.length-1] === '-' && ['+', '*', '/'].includes(equation[equation.length-2])){
                setEquation(current => [...current.slice(0,-2), e.target.innerText])
            }
            else{
                setEquation(current => [...current, e.target.innerText])
            }
        }
        else {
            
            setEquation(current => [...current, e.target.innerText])
        }
        
    }
    
    const handleClear = () =>{
        setBeginsWithZero(true)
        setEquation(["0"])
        setIsDecimal(false)
        console.log("clr")
    }
    const handleEquals = () =>{
        console.log(Array.isArray(equation))
        const result = [math.evaluate(equation.join(''))]
        setIsDecimal(false)
        setEquation(result)
        console.log('='+result)
    }
    return(
        <div className="" id="calculator">
            
            <div className="container-fluid"><div className="" id="display">
                {equation}
            </div></div>
            
            <div className="container-fluid"><div className="row gx-0" >
            <button className="" id="clear" onClick={handleClear}>AC</button>
            </div></div>
            <div className="container-fluid"><div className="row gx-0" >
                <div className="col-3"><button className="numeric-button" id="one" onClick={handleNumericButtonPress}>1</button></div>
                <div className="col-3"><button className="numeric-button" id="two" onClick={handleNumericButtonPress}>2</button></div>
                <div className="col-3"><button className="numeric-button" id="three" onClick={handleNumericButtonPress}>3</button></div>
                <div className="col-3"><button className="function-button" id="add" onClick={handleFunctionButtonPress}>+</button></div>
            </div></div>
            <div className="container-fluid"><div className="row" >
                <div className="col-3"><button className="numeric-button" id="four" onClick={handleNumericButtonPress}>4</button></div>
                <div className="col-3"><button className="numeric-button" id="five" onClick={handleNumericButtonPress}>5</button></div>
                <div className="col-3"><button className="numeric-button" id="six" onClick={handleNumericButtonPress}>6</button></div>
                <div className="col-3"><button className="function-button" id="subtract" onClick={handleFunctionButtonPress}>-</button></div>
            </div></div>
            <div className="container-fluid"><div className="row" >
                <div className="col-3"><button className="numeric-button" id="seven" onClick={handleNumericButtonPress}>7</button></div>
                <div className="col-3"><button className="numeric-button" id="eight" onClick={handleNumericButtonPress}>8</button></div>
                <div className="col-3"><button className="numeric-button" id="nine" onClick={handleNumericButtonPress}>9</button></div>
                <div className="col-3"><button className="function-button" id="multiply" onClick={handleFunctionButtonPress}>*</button></div>
            </div></div>
            
            <div className="container-fluid"><div className="row" >
                <div className="col-3"><button className="numeric-button" id="decimal" onClick={handleNumericButtonPress}>.</button></div>
                <div className="col-3"><button className="numeric-button" id="zero" onClick={handleNumericButtonPress}>0</button></div>
                <div className="col-3"><button className="function-button" id="equals" onClick={handleEquals}>=</button></div>
                <div className="col-3"><button className="function-button" id="divide" onClick={handleFunctionButtonPress}>/</button></div>
            </div></div>
                
        </div>
    )
}
export default Calculator