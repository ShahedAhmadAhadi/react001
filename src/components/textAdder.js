import React, { Component } from 'react'

class Writer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: ''
        }
    }

    write = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <input value={this.state.value} onChange={this.write}/>
            </div>
        )
    }
}

export { Writer }
