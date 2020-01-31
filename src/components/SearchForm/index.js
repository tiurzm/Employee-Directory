import React from "react";

function SearchForm(props) {
    return (
        <form className="text-center">
            <div className="form-group">
                <input type="text" className="form-control w-75 d-inline" 
                    name= "search"
                    list="searchs"
                    id="search"
                    // value={props.search} 
                    // onChange={props.handleInputChange}
                />
                {/* <datalist id="searchs">
                    {props.searchs.map(search => (
                        <option value={search} key={search} />
                    ))}
                </datalist> */}
                <button type="submit" className="btn float-right d-inline" 
                    // onClick={props.handleFormSubmit}
                > Search
                </button>
            </div>
        </form>
    );
}

export default SearchForm;