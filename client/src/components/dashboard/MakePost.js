import React from 'react'

const MakePost = ({handleSubmit, handleChange}) => {
    return (
        <div>
            <div class="row">
    <div class="col-md">
      <div class="card blue darken-1">
        <div class="card-content white-text">
          <span class="card-title"></span>
      {/*     <form className="form-inline" onSubmit={e => handleSubmit(e) }>
        <input type="submit" 
        onChange = {e => handleChange(e)}
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form> */}
          <input></input>
        </div>
        <div class="card-action">
          <button>Submit</button>
          
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}

export default MakePost
