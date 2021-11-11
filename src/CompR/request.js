import React, { Component } from 'react'
import axios from 'axios'

class Request extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            console.log(response)
            this.setState(
                { posts: response.data }
            )
        })
            .catch(error => console.log(error))
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Request
