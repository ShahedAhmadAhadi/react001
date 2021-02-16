import React, { useState, useEffect } from 'react'

function HooksInputCounter() {

    let inputRef = React.createRef();

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

    let enter = (e) => {
        console.log(e);
        if (e.charCode === 13){
            pass()
        }else{
            setVal(e.target.value)
        }
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div className="bg-white rounded p-5">
            <h1 className="text-black font-semibold">{add}</h1>
            <input value={val} ref={inputRef} onChange={(e) => setVal(e.target.value)} onKeyPress={(e) => enter(e)} className="text-black border-2 my-2  rounded-l bg-gray-200 px-3 outline-none text-base py-1" />
            <button onClick={pass} className="text-white font-semibold bg-purple-500 border-2 rounded-r px-4 text-base py-1">Add</button>
            <p className="text-sm text-red-600">{show}</p>
        </div>
    )
}

export default HooksInputCounter
