import React, { useState, useEffect } from "react";

function HookAddRemove() {

    let inputRef = React.createRef();

    const [val, setVal] = useState("");
    const [update, setUpdate] = useState([]);
    const [count, setCount] = useState(0)

    const inpt = () => {
        update.push([val, count]);
        setVal('');   
        setCount(prev => prev + 1);    
    }

    const remove = (in_arr_index) => {
        let new_update = update.filter((val) => {console.log(val, in_arr_index)
             return val[1] != in_arr_index});
        
        setUpdate(new_update);
    }

    let enter = (e) => {
        if (e.charCode === 13){
            inpt()
        }else{
            setVal(e.target.value)
        }
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    let colors = (queue) => {
        for(let i = 0; i <= queue; i++){
            if(queue % 4 === 0){
                return 'red'
            }else if(queue % 3 === 0){
                return 'blue'
            }else{
                return 'purple'
            }
        }
    }
    let btnColors = (queue) => {
        for(let i = 0; i <= queue; i++){
            if(queue % 5 === 0 && queue % 7 === 0){
                return 'red'
            }else if(queue % 6 === 0){
                return 'blue'
            }
            else{
                return 'purple'
            }
        }
    }

    return (
        <div>
            <input value={val} ref={inputRef} onKeyPress={enter} onChange={(e) => setVal(e.target.value)} className="text-black px-2 text-base py-2 border-2 w-64 font-semibold outline-none focus:border-gray-400" />
            <button onClick={inpt} className="bg-green-400 px-4 text-base py-2 border-2 border-l-0 font-semibold">Add</button>
            <div className="flex justify-around flex-wrap w-80">
                {update &&
                    update.map((item) => (
                        <div key={item[1]} className={`bg-${colors(item[1])}-400 m-2 rounded px-4 pb-2 pt-1`}>
                            <span className="text-black mr-4 font-semibold">{item[0]}</span>
                            <button onClick={() => remove(item[1])} className={`text-sm bg-${btnColors(item[1])}-300 rounded-full px-2 pb-1 pt-0.5`}>
                                &times;
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default HookAddRemove;
