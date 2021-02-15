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
            let item = this.state.lst.push([val, this.state.lst.length])
            console.log(this.state.lst)
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

    remove = (val) => {
        let rem = this.state.lst.filter((v, i) => v[1] != val);
        console.log(rem, val);
        this.setState({
            lst: rem
        })
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.value}
                    onChange={this.input}
                    onKeyPress={this.keyFilter}
                />
                <button onClick={this.add}>Add</button>
                {this.state.lst && this.state.lst.map((item) => <div key={item[1]}><span>{item[0]}</span><button onClick={() => this.remove([item[1]])}>&times;</button></div>)}
            </div>
        );
    }
}

export default AddRemove;
