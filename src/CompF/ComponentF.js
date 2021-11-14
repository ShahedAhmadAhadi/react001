import React from 'react'
import { CountContext } from '../App'
import { useContext } from 'react'

function ComponentF() {
    const countContext = useContext(CountContext)
    return (
        <div>
            ComponentA - {countContext.count}
            <button onClick={() => countContext.updateCount('increment')}>Increment</button>
            <button onClick={() => countContext.updateCount('decrement')}>Decrement</button>
            <button onClick={() => countContext.updateCount('reset')}>reset</button>
        </div>
    )
}

export default ComponentF

