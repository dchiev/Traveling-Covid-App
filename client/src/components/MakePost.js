import React from 'react'
 
const MakePost = ({handleSubmit, handleChange}) => {
    return (
        <div>
            <form className="form-inline" onSubmit={e => handleSubmit(e) }>
        <input type="submit" 
        onChange = {e => handleChange(e)}
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
        </div>
    )
}

export default MakePost;