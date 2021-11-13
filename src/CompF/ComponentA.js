import React, {useContext} from 'react'
import {CountContext} from '../App'

function ComponentA() {
    const countContext = useContext(CountContext)
    return (
        <div>
            ComponentA - {countContext.count}
            <button onClick={() => countContext.updateCount('increment')}>Increment</button>
        </div>
    )
}

export default ComponentA



