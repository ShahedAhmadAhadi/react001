import React, {useState} from 'react'

function HooksFullCounter() {

    const [count, setCount] = useState(0)



    return (
        <div>
            <h1 className="bg-white px-4 py-1 rounded w-48 m-auto text-black font-semibold">{count}</h1>
            <button onClick={() => setCount(count + 1)} className="bg-green-600 px-4 py-1 rounded m-2 font-semibold">Increment</button>
            <button onClick={() => setCount(count - 1)} className="bg-red-500 px-4 py-1 rounded m-2 font-semibold">Decrement</button>
            <button onClick={() => setCount(0)} className="bg-yellow-400 px-4 py-1 rounded m-2 font-semibold">reset</button>
        </div>
    )
}

export default HooksFullCounter
