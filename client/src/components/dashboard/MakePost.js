import React, { Component } from  'react';
import PostApi from "../../utils/postsAPI";

class MakePost extends Component {

    state = { 
        text: ""
    }

   handleChange = (e) => {
        this.state.text = e.target.value;
        
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.text);
        PostApi.savePost({
            text: this.state.text
            
        }).then(res => console.log(res));
    }
 render () { 
    return (
        <div>
            <div class="row">
    <div class="col-md">
      <div class="card blue darken-1">
        <div class="card-content white-text">
          <span class="card-title"></span>
           <form className="form-inline" onSubmit = {this.handleSubmit}>
        <input type="submit" 
        onChange = {this.handleChange}
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      
        <div class="card-action" >
          <button>Submit</button>
          
        </div>
        </form> 
          
        </div>
      </div>
    </div>
  </div>
        </div>
    ) 
}
}

export default MakePost
