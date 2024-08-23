import React, {useState} from "react";

const SearchBar = ({query, setQuery}) => {

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return <div className="search">
             <div className="query"> 
                 <input 
                    value={query} 
                    onChange= {handleChange}
                    placeholder="Search..."
                    />
                </div>
    </div>
}

export default SearchBar

