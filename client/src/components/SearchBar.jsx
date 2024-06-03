import React, {useState} from "react";
import {FaSearch} from "react-icons/fa"
import axios from "axios";


const SearchBar = ({setResults}) => {

    const [input, setInput] = useState('')

    const fetchData =  async (value) => {
                const response = await axios.get(`/api/dolls/doll/${value}`)
                //setResults(response)
                console.log(response)
            };
    
    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return <div className="input-wrapper">
        <input placeholder="Enter a name" value={input} onChange={(e) => handleChange(e.target.value)}></input>
        <FaSearch id="search-icon"/>
    </div>

}

export default SearchBar