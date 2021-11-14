import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { CountContext } from '../App'

function ComponentC() {
    const countContext = useContext(CountContext)
    return (
        <div>
            ComponentC - {countContext.count}
            <button onClick={() => countContext.updateCount('increment')}>Increment</button>
            <button onClick={() => countContext.updateCount('decrement')}>Decrement</button>
            <button onClick={() => countContext.updateCount('reset')}>reset</button>
        </div>
    )
}

export default ComponentC


