import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import PatternFilter from "../components/PatternFilter";
import DollSearch from "../components/DollSearch";
import FindSimilarDolls from "../components/FindSimilarDolls";
import { Button, Collapse } from "react-bootstrap";

const AdvancedSearch = ({
    patternTypes,
    selectedPatterns,
    setSelectedPatterns,
    query,
    setQuery,
    searchTerm,
    handleSearch,
    filteredDolls,
    handleSelectDoll,
    clearDoll,
    includeSimilar,
    handleCheck
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-8 d-flex align-items-center mx-4">
                        <SearchBar query={query} setQuery={setQuery} className="flex-grow-1 mx-4" />
                        <Button
                            onClick={() => setOpen(!open)}
                            aria-controls="advanced-search-collapse"
                            aria-expanded={open}
                            variant="primary"
                            className="flex-shrink-0 mx-4"
                        >
                            {open ? "Hide Advanced Search" : "Show Advanced Search"}
                        </Button>
                    </div>
                </div>
            </div>


            <Collapse in={open}>
                <div id="advanced-search-collapse" className="container">
                    <hr className="my-4 hr-bolder" />
                    {/* Pattern Filter Section */}
                    <div className="row">
                        <div className="col-md-12">
                            <PatternFilter
                                patternTypes={patternTypes}
                                selectedPatterns={selectedPatterns}
                                setSelectedPatterns={setSelectedPatterns}
                            />
                        </div>
                    </div>
                    <hr className="my-4 hr-medium" />

                    {/* Doll Search Section */}
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <h5 className=" text-custom">Filter by Doll Type</h5>
                                <Button
                                    onClick={clearDoll}
                                    variant="danger"
                                    className="p-1"
                                >
                                    Clear Doll Type
                                </Button>
                            </div>
                            <div className="row">
                                <div className="col-md-8 mb-2">
                                    <DollSearch
                                        value={searchTerm}
                                        onChange={handleSearch}
                                        results={filteredDolls}
                                        onSelect={handleSelectDoll}
                                    />
                                </div>
                                <div className="col-md-4 mb-2">
                                    <FindSimilarDolls
                                        includeSimilar={includeSimilar}
                                        onChange={handleCheck}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4 hr-bolder" />
                </div>

            </Collapse>
        </div>
    );
};

export default AdvancedSearch;
