import React, {useState} from "react";
import Form from "react-bootstrap/Form";


const SearchBar = ({ query, setQuery }) => {
    return (
        <Form.Control
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    );
};

export default SearchBar

