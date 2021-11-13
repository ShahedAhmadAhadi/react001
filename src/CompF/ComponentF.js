import React, { Component } from 'react'
import { UserConsumer } from '../context/context'

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (value) => {
                        return <div> ComponentF {value} </div>
                    }
                }

            </UserConsumer>
        )
    }
}

export default ComponentF
