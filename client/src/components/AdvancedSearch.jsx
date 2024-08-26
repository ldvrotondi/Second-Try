import React from "react";
import { Button } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import PatternFilter from "../components/PatternFilter";
import './advancedSearch.css'; 
import { Container, Row, Col } from 'react-bootstrap';

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