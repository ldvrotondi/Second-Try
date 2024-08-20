import React, {useState} from "react";
import {FaSearch} from "react-icons/fa"
import axios from "axios";

const SearchBar = ({placeholder, data, cardType, keys}) => {

    const [query, setQuery] = useState('')

    const handleChange = (value) => {
        setQuery(value)
        //fetchData(value)
    }

    const filteredItems = data.filter((item) =>{
        keys.some((key) => item[key]?.toLowerCase().includes(query.toLowerCase()))})

    const filteredData = ({data, query}) =>{
        let filteredProducts = data
        if (query){
            filteredProducts = filteredItems
        }
        return filteredProducts
    }

    return <div className="search">
        <div className="query"> 
            <input 
                value={query} 
                onChange={(e) => handleChange(e.target.value)}>
            </input>

        </div>

       
        
    </div>

}

export default SearchBar


/*const SearchBar = ({placeholder, inputData, cardType}) => {

    const [input, setInput] = useState('')
    const [data, setData] = useState([])

    const fetchData =  async (value) => {
                const response = await axios.get(`/api/dolls/doll/${value}`)
                //setResults(response)
                console.log(response.data)
                setData(response.data)
            };
    
    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    const filteredData = [] 

    return <div className="search">
        <div className="query"> 
            <input 
                value={input} 
                onChange={(e) => handleChange(e.target.value)}>
            </input>

        </div>
        <div className="result">
            {
            data.map((value,key) => {
                filteredData.push()
            })
            }
        </div>
       
        
    </div>

}

export default SearchBar*/