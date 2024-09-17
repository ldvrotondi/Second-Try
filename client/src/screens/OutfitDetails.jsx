import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import PatternCards from "../components/PatternCards";
import AdvancedSearch from "../components/AdvancedSearch";
import listSizes from "../utils/listSizes";
import getMeasurementRanges from "../utils/getMeasurementRange";
import filterByRange from "../utils/filterByRange";
import filterDolls from "../utils/filterDolls";

const OutfitDetails = () => {
    const { id } = useParams();
    const [query, setQuery] = useState('');
    const [outfits, setOutfits] = useState([]);
    const [patterns, setPatterns] = useState([]);
    const [selectedPatterns, setSelectedPatterns] = useState([]);
    const [patternTypes, setPatternTypes] = useState([]);
    const [filteredDolls, setFilteredDolls] = useState([]);
    const [selectedDoll, setSelectedDoll] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [includeSimilar, setIncludeSimilar] = useState(false);
    const [dolls, setDolls] = useState([]);

    useEffect(() => {
        const getOutfit = async () => {
            const { data } = await axios.get(`/api/outfits/patterns/${id}`);
            setOutfits(data);
        };
        getOutfit();
    }, [id]);

    useEffect(() => {
        const getPatternData = async () => {
            const { data } = await axios.get(`/api/patterns/byoutfit/${id}`);
            setPatterns(data);
    
            // Extract doll IDs directly from each pattern
            const allDollIds = data.map(pattern => pattern.dollid);
            const uniqueDollIds = [...new Set(allDollIds)];
    
            // Fetch and filter dolls based on unique doll IDs
            getDollData(uniqueDollIds);
    
            // Extract unique pattern types
            const uniquePatterns = [...new Set(data.map(pattern => pattern.type))];
            setPatternTypes(uniquePatterns);
        };
    
        const getDollData = async (dollIds) => {
            const { data } = await axios.get('/api/dolls');
            const filtered = data.filter(doll => dollIds.includes(doll.dollid));
            setDolls(filtered);
        };
    
        getPatternData();
    }, [id]);
    
    

    const filterByPatternType = (data, selectedPatterns) => {
        if (selectedPatterns.length === 0) return data;
        return data.filter(pattern =>
            selectedPatterns.includes(pattern.type)
        );
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        setFilteredDolls(filterDolls(dolls, value));
    };

    const handleSelectDoll = (doll) => {
        setSelectedDoll(doll);

        const formattedSearchTerm = [doll.brand, doll.line, doll.type]
            .filter(Boolean)
            .join(" ")
            .trim();

        setSearchTerm(formattedSearchTerm);

        // Filter and add similar dolls if "Include Similar" is checked
        let filtered = [doll];
        if (includeSimilar) {
            const measurementRanges = getMeasurementRanges(doll);
            const dollsInRange = filterByRange(dolls, doll, measurementRanges);
            filtered = [...filtered, ...dollsInRange];
        }

        setFilteredDolls(filtered);
    };

    const handleCheck = () => {
        setIncludeSimilar((prevIncludeSimilar) => {
            const checked = !prevIncludeSimilar;

            // If there's a selected doll, update filtered dolls based on "Include Similar" being checked or unchecked
            if (selectedDoll) {
                let filtered = [selectedDoll];
                if (checked) {
                    const measurementRanges = getMeasurementRanges(selectedDoll);
                    const dollsInRange = filterByRange(
                        dolls,
                        selectedDoll,
                        measurementRanges
                    );
                    filtered = [...filtered, ...dollsInRange];
                }
                setFilteredDolls(filtered);
            }

            return checked;
        });
    };

    const clearDoll = () => {
        setIncludeSimilar(false);
        setSelectedDoll(null);
        setFilteredDolls([]);
        setSearchTerm("");
    };

    const filterByDoll = (patterns, selectedDolls) => {
        if (selectedDolls.length === 0) return patterns;
    
        // Create a Set of selected doll IDs for efficient lookup
        const selectedDollIds = new Set(selectedDolls.map(doll => doll.dollid));
    
        return patterns.filter(pattern => 
            selectedDollIds.has(pattern.dollid)
        );
    };
    

    const filteredPatterns = filterByDoll(
        filterByPatternType(patterns, selectedPatterns),
        filteredDolls
    );

    return (
        <div className="container px-5 my-3 text-dark">
            <div className="row">

                <div className="col-md-auto position-static">
                    {
                        outfits.map(outfit => (
                            <div key={outfit.outfitid} className="card mb-4" style={{ width: '18rem' }}>
                                <img src={`/images/outfits/${outfit.outfitid}.png`} className="card-img-top" alt={outfit.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{outfit.name}</h5>
                                    <p className="card-text">
                                        <strong>From:</strong> {outfit.book?.series && outfit.book?.issue ? (
                                            <Link to={`/books/${outfit.issueid}`} className="text-decoration-none">
                                                {outfit.book.series} {outfit.book.issue}
                                            </Link>
                                        ) : 'N/A'}<br />
                                        <strong>Designer:</strong> {outfit.designer || 'Unknown'}<br />
                                        <strong>Sizes:</strong> {outfit.pattern.length > 0 ? listSizes(outfit.pattern, 'text-decoration-none') : 'N/A'}<br />
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="col">
                    <div className="row justify-content-center mb-3 text-center bg-transparent-white">
                        <div className="col text-custom d-flex justify-content-between align-items-center">
                            <h1>Included Patterns</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center bg-transparent-white mt-3">
                        <AdvancedSearch
                            query={query}
                            setQuery={setQuery}
                            patternTypes={patternTypes}
                            selectedPatterns={selectedPatterns}
                            setSelectedPatterns={setSelectedPatterns}
                            searchTerm={searchTerm}
                            handleSearch={handleSearch}
                            filteredDolls={filteredDolls}
                            handleSelectDoll={handleSelectDoll}
                            clearDoll={clearDoll}
                            includeSimilar={includeSimilar}
                            handleCheck={handleCheck}
                        />
                    </div>
                    <div className="row justify-content-center bg-transparent-white mt-3">
                        {filteredPatterns.map(pattern => (
                            <div key={pattern.patternid} className="col-md-auto col-sm-auto col-lg-auto mb-4">
                                <PatternCards pattern={pattern} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutfitDetails;
