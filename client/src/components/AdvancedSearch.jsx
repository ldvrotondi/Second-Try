import React from "react";
import SearchBar from "../components/SearchBar";
import PatternFilter from "../components/PatternFilter";
import FindSimilarDolls from "./FindSimilarDolls";


const AdvancedSearch = ({ patternTypes, selectedPatterns, setSelectedPatterns, query, setQuery, dolls, filteredDolls, setFilteredDolls }) => {
    

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 mb-3">
                    <SearchBar query={query} setQuery={setQuery} />
                </div>
                <div className="col-md-4">
                    <PatternFilter
                        patternTypes={patternTypes}
                        selectedPatterns={selectedPatterns}
                        setSelectedPatterns={setSelectedPatterns}
                    />
                </div>
            </div>

            <div className="row mt-3">
            <div className="mb-4">
            <div className="mb-4">
                
            <FindSimilarDolls dolls={dolls} filteredDolls={filteredDolls} setFilteredDolls={setFilteredDolls} />
        </div>
          </div>
            </div>
        </div>
    );
};

export default AdvancedSearch;
