import React, { Component } from 'react'
import ComponentC from './ComponentC'

class ComponentB extends Component {
    render() {
        return (
            <div>
                <ComponentC />
                <div> ComponentB </div>
            </div>
        )
    }
}

export default ComponentB
