import React, { Component } from "react";

class AddRemove extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            lst: []
        };
    }

    add = () => {
        if (this.state.value) {
            let val = this.state.value;
            let item = this.state.lst.push(val)
            this.setState({
                value: ''
            })
        }
        
    };

    input = (e) => {
        this.setState({
            value: e.target.value
        });
    };
    keyFilter = (e) => {
        if (e.charCode === 13) {
            this.add();
        }
    };

    render() {
        return (
            <div>
                <input
                    value={this.state.value}
                    onChange={this.input}
                    onKeyPress={this.keyFilter}
                />
                <button onClick={this.add}>Add</button>
                {this.state.lst && this.state.lst.map((item) => <div><span>{item}</span><button>&times;</button></div>)}
            </div>
        );
    }
}

export default AddRemove;
