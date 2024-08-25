import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import OutfitCards from '../components/OutfitCards';
import filteredData from "../utils/filteredData";
import { outfitKeys } from "../utils/searchKeys";
import AdvancedSearch from "../components/AdvancedSearch";

const ViewOutfits = () => {
    const [outfits, setOutfits] = useState([]);
    const [query, setQuery] = useState('');
    const [selectedPatterns, setSelectedPatterns] = useState([]);
    const [patternTypes, setPatternTypes] = useState([]);

    useEffect(() => {
        const getOutfitData = async () => {
            const { data } = await axios.get('api/outfits/patterns');
            setOutfits(data);

            // Extract all pattern types for the filter checkboxes
            const allPatterns = data.flatMap(outfit => outfit.pattern.map(p => p.type));
            const uniquePatterns = [...new Set(allPatterns)];
            setPatternTypes(uniquePatterns);
        };
        getOutfitData();
    }, []);

    const filterByPatternType = (data) => {
        if (selectedPatterns.length === 0) return data;
        return data.filter(outfit => 
            outfit.pattern.some(p => selectedPatterns.includes(p.type))
        );
    };

    const filteredOutfits = filterByPatternType(filteredData(outfits, outfitKeys, query));

    return (
        <Container>
            <h1 className='text-left'>All Outfits</h1>
            <hr />
            <Row>

                <Col>
                   <Row className="advSearch-layout"> 
                    <AdvancedSearch query={query} setQuery={setQuery} patternTypes={patternTypes} 
                        selectedPatterns={selectedPatterns} 
                        setSelectedPatterns={setSelectedPatterns} />
                    
                 </Row>
                    <Row>
                        {filteredOutfits.map(outfit => (
                            <Col key={outfit.outfitid}>
                                <OutfitCards outfit={outfit} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ViewOutfits;