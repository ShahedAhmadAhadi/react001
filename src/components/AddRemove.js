import React, { Component } from "react";
import "./style.css";

class AddRemove extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();

        this.state = {
            value: "",
            lst: [],
            count: 0,
        };
    }

    componentDidMount(){
        this.inputRef.current.focus();
    }

    add = () => {
        if (this.state.value) {
            let val = this.state.value;
            let item = this.state.lst.push([val, this.state.count]);
            console.log(this.state.lst);
            this.setState({
                value: "",
                count: this.state.count + 1,
            });
        }
    };

    input = (e) => {
        this.setState({
            value: e.target.value,
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
            lst: rem,
        });
    };

    render() {
        return (
            <div>
                <input
                    value={this.state.value}
                    onChange={this.input}
                    onKeyPress={this.keyFilter}
                    className="border-2 rounded-l text-base p-2 text-black font-semibold outline-none"
                    ref={this.inputRef}
                />
                <button
                    onClick={this.add}
                    className="border-2 rounded-r text-white bg-blue-500 p-2 px-5 text-base font-semibold"
                >
                    Add
                </button>
                <div className="m-2 rounded-lg overflow-hidden border-2 border-gray-200">
                    {this.state.lst &&
                        this.state.lst.map((item) => (
                            <div
                                key={item[1]}
                                className="bg-white flex justify-between p-2 px-5 border-b-2"
                            >
                                <span className="text-black ">{item[0]}</span>
                                <button
                                    onClick={() => this.remove([item[1]])}
                                    className="rounded-full bg-pink-400 px-3 pb-1 pt-0.5 text-sm"
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                </div>
            </div>
        );
    }
}

export default AddRemove;
