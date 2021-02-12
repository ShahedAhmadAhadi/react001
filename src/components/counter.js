import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            value: 0
        }
    }
    add = () => {
        this.setState({
            value: this.state.value + 1
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={this.add}>Click to add</button>
            </div>
        )
    }
}

export { Counter }
