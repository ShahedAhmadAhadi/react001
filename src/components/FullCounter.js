import React, { Component } from 'react'
import './style.css'


export class FullCounter extends Component {
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

    sub = () => {
        this.setState({
            value: this.state.value - 1
        })
    }

    reset = () => {
        this.setState({
            value:  0
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={this.add} className="btn">Add</button>
                <button onClick={this.sub} className="btn">Subtract</button>
                <button onClick={this.reset} className="btn">Reset</button>

            </div>
        )
    }
}

export default FullCounter
