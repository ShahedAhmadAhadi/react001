import React, { Component } from 'react'
import { UserConsumer } from '../context/context'

class ComponentC extends Component {
    render() {
        return (
            <UserConsumer>
                {(value) => {
                    return <div> ComponentC {value} </div>
                }}
            </UserConsumer>
        )
    }
}

export default ComponentC

