import React, { useState } from 'react'

const Password = () => {
    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [number, setNumber] = useState(false);
    const [symbol, setSymbol] = useState(false);
    const [length, setLength] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(upperCase, lowerCase, symbol, number);
        if(length >=8 && length<=50){
            console.log("Password Length is valid");
            if (upperCase && lowerCase && number && symbol) {
                console.log("Password is valid");
            }
        }
        else{
            console.log("Password Length is not valid");
            alert("Password Length is not valid");
        }


    }
    return (
        <div>
            <input type="text" placeholder="Password" />
            <form onSubmit={handleSubmit} >

                <div className='flex '>
                    <div>
                        <div>
                            <input type='checkbox' id='upperCase' onClick={() => setUpperCase((prev) => !prev)} />
                            <label for="upperCase">Include UpperCase</label>
                        </div>

                        <div>
                            <input type='checkbox' id='lowerCase' onClick={() => setLowerCase((prev) => !prev)} />
                            <label for="lowerCase">Include LowerCase</label>
                        </div>

                        <div>
                            <input type='checkbox' id='number' onClick={() => setNumber((prev) => !prev)} />
                            <label for="number">Include Number</label>
                        </div>

                        <div>
                            <input type='checkbox' id='symbol' onClick={() => setSymbol((prev) => !prev)} />
                            <label for="symbol">Include Symbol</label>
                        </div>
                    </div>

                    <div>
                        <input type="number" className='border border-solid border-black' value={length} onChange={(e) => setLength(e.target.value)} />
                    </div>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Password
