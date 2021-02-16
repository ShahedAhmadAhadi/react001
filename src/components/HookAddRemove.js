import React, { useState, useEffect } from "react";

function HookAddRemove() {

    const [val, setVal] = useState("");
    const [update, setUpdate] = useState([]);
    const [count, setCount] = useState(0)

    const inpt = () => {
        update.push([val, count]);
        console.log(val, count);
        setVal('');   
        setCount(prev => prev + 1);    
    }

    const remove = (in_arr_index) => {
        let new_update = update.filter((val) => {console.log(val, in_arr_index)
             return val[1] != in_arr_index});
        
        setUpdate(new_update);
    }
    return (
        <div>
            <input value={val} onChange={(e) => setVal(e.target.value)} className="text-black" />
            <button onClick={inpt}>Add</button>
            <div>
                {update &&
                    update.map((item) => (
                        <div key={item[1]}>
                            <span className="text-black">{item[0]}</span>
                            <button onClick={() => remove(item[1])}>
                                &times;
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default HookAddRemove;
