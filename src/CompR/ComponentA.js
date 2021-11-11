import React, { Component } from 'react'
import { UserConsumer } from '../context/context'

class ComponentA extends Component {
    render() {
        return (
        // <div>
        //     <button onClick={this.props.updateValue}>a</button>
        // </div>
            <UserConsumer>
                {
                    (value) => {
                        return <div> ComponentA {value} </div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentA

