import React, { Component } from 'react'
import MakePost from "./MakePost";

export default class Post extends Component {
    handleSubmit = e =>{
        console.log(e);
    }

    handleChange = e => {
        console.log(e.target.value);
    }
    render() {
        return (
            <div>
           <MakePost handleSubmit = {this.handleSubmit}
           handleChange = {this.handleChange} />     
            </div>
        )
    }
}
