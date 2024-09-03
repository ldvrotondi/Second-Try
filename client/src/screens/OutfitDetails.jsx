import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import PatternCards from "../components/PatternCards";
import filteredData from "../utils/filteredData";
import { patternKeys } from "../utils/searchKeys";
import AdvancedSearch from "../components/AdvancedSearch";
import listSizes from "../utils/listSizes";

const OutfitDetails = () => {
    const { id } = useParams();
    const [query, setQuery] = useState('');
    const [outfits, setOutfits] = useState([]);
    const [patterns, setPatterns] = useState([]);
    const [selectedPatterns, setSelectedPatterns] = useState([]);
    const [patternTypes, setPatternTypes] = useState([]);

    useEffect(() => {
        const getOutfit = async () => {
            const { data } = await axios.get(`/api/outfits/patterns/${id}`);
            console.log(data);
            setOutfits(data);
        }
        getOutfit();
    }, [id]);

    useEffect(() => {
        const getPatternData = async () => {
            const { data } = await axios.get(`/api/patterns/byoutfit/${id}`);
            setPatterns(data);
            const uniquePatterns = [...new Set(data.flatMap(pattern => pattern.type))];
            setPatternTypes(uniquePatterns);
        }
        getPatternData();
    }, [id]);

    const filterByPatternType = (data, selectedPatterns) => {
        if (selectedPatterns.length === 0) return data;
        return data.filter(pattern =>
            selectedPatterns.includes(pattern.type)
        );
    };

    const filteredOutfits = filterByPatternType((filteredData(patterns, patternKeys, query)), selectedPatterns);

    return (
        <Container>
            <Row>
                <Col md="auto" className="stickyCol">
                    {
                        outfits.map(outfit => (
                            <Card key={outfit.outfitid} style={{ width: '18rem', margin: '5px' }}>
                                <Card.Img variant="top" src={`/images/outfits/${outfit.outfitid}.png`} />
                                <Card.Body>
                                    <Card.Title>{outfit.name}</Card.Title>
                                    <Card.Text>
                                        <i>From:</i> {outfit.book?.series && outfit.book?.issue ? (
                                            <Link to={`/books/${outfit.issueid}`} className={`outerLink`}>
                                                {outfit.book.series} {outfit.book.issue}
                                            </Link>
                                        ) : 'N/A'}<br />
                                        <i>Designer:</i> {outfit.designer || 'Unknown'}<br />
                                        <i>Sizes:</i> {outfit.pattern.length > 0 ? listSizes(outfit.pattern, `outerLink`) : 'N/A'}<br />
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </Col>
                <Col className="subordinate-container">
                    <h1>Associated Patterns:</h1>
                    <Row>
                        <AdvancedSearch
                            query={query}
                            setQuery={setQuery}
                            patternTypes={patternTypes}
                            selectedPatterns={selectedPatterns}
                            setSelectedPatterns={setSelectedPatterns}
                        />
                    </Row>
                    <Row>
                        {filteredOutfits.map(pattern => (
                            <Col key={pattern.patternid}>
                                <PatternCards pattern={pattern} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default OutfitDetails;