import React from "react";

function SearchForm(props) {
    return (
        <form className="text-center">
            <div className="form-group">
                <input type="text" className="form-control w-75 d-inline" 
                    name= "search"
                    list="search"
                    autoComplete="off"
                    value={props.search} 
                    onChange={props.handleInputChange}
                />
                {/* <button type="submit" className="btn float-right d-inline"> Search</button> */}
            </div>
        </form>
    );
    // sorting and filtering
}

export default SearchForm;