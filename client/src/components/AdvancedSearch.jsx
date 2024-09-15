import React from "react";
import SearchBar from "../components/SearchBar";
import PatternFilter from "../components/PatternFilter";
import './advancedSearch.css'; 
import { Row,  } from 'react-bootstrap';

const AdvancedSearch = ({ patternTypes, selectedPatterns, setSelectedPatterns, query, setQuery }) => {
    return (
        <Row className="advanced-search">
            <SearchBar query={query} setQuery={setQuery} />
            <PatternFilter
                patternTypes={patternTypes}
                selectedPatterns={selectedPatterns}
                setSelectedPatterns={setSelectedPatterns}
            />
        </Row>
    );
};

export default AdvancedSearch;