import React, { Component } from 'react'
import ComponentE from './ComponentE'

class ComponentD extends Component {
    render() {
        return (
            <div>
                <div> ComponentD</div>
                <ComponentE />
            </div>
        )
    }
}

export default ComponentD

