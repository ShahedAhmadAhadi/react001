import React, { useState } from 'react'

function HooksInputCounter() {

    const [val, setVal] = useState('');
    const [add, setAdd] = useState(0);
    const [show, setShow] = useState('')

    let pass = () => {
        let num = parseFloat(val);
        if (num) {
            setAdd(prevState => {return prevState + num});
            setVal('');
            setShow('')
        }else if(val === 'reset'){
            setAdd(0)
            setVal('')
            setShow('')
        } else {
            setVal('')
            setShow('You Have Entered A Non-Numeric Value')
        }
        
    }

    return (
        <div>
            <h1>{add}</h1>
            <input value={val} onChange={(e) => setVal(e.target.value)} className="text-black" />
            <button onClick={pass}>Add</button>
            <p className="">{show}</p>
        </div>
    )
}

export default HooksInputCounter
