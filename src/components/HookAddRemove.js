import React, { useState, useEffect } from "react";

function HookAddRemove() {

    const [val, setVal] = useState("");
    const [show, setShow] = useState('')
    const [update, setUpdate] = useState([])

    const inpt = () => {
        update.push(val)
        setVal('');
        setShow('');        
    }

    const remove = (in_arr_index) => {
        update.filter((val, ind) => {return val[1] != in_arr_index})
    }

    return (
        <div>
            <input value={val} onChange={(e) => setVal(e.target.value)} className="text-black" />
            <button onClick={inpt}>Add</button>
            <div>
                {update &&
                    update.map((item) => (
                        <div key={item[1]}>
                            <span className="text-black ">{item[0]}</span>
                            <button onClick={() => remove([item[1]])}>
                                &times;
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default HookAddRemove;
