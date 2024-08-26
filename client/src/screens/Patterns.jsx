import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import PatternCards from '../components/PatternCards'
import filteredData from "../utils/filteredData";
import {patternKeys} from "../utils/searchKeys";
import AdvancedSearch from "../components/AdvancedSearch";


const ViewPatterns = () => {
    const [patterns, setPatterns] = useState([])
    const [query, setQuery] = useState('');

    const [selectedPatterns, setSelectedPatterns] = useState([]);
    const [patternTypes, setPatternTypes] = useState([]);

    useEffect(() => {
        const getPatternData = async () => {
            const {data} = await axios.get('api/patterns/all/')
            setPatterns(data)
            const uniquePatterns = [...new Set(data.flatMap(pattern => pattern.type))];
            setPatternTypes(uniquePatterns);
        }
        getPatternData()
    },[]
    )

    const filterByPatternType = (data, selectedPatterns) => {
        if (selectedPatterns.length === 0) return data;
        return data.filter(pattern => 
             selectedPatterns.includes(pattern.type)
        );
    };

    const filteredOutfits = filterByPatternType((filteredData(patterns, patternKeys, query)), selectedPatterns);


    return (
        <>
       <Container>
        <h1 className='text-left'>All Patterns</h1>
        <hr />
        <Row>
            <Col>
        <Row> 
                    <AdvancedSearch query={query} setQuery={setQuery} patternTypes={patternTypes} 
                        selectedPatterns={selectedPatterns} 
                        setSelectedPatterns={setSelectedPatterns} />
                    
                 </Row>
                 <Row>
                    {
                            filteredOutfits.map(pattern => {
                            return <Col key={pattern.patternid}>
                            <PatternCards pattern={pattern} />
                            </Col> 
                            
                            })
                        }
                        </Row>
            </Col>
        </Row>
       </Container>
           
            
            </>
    )
}

export default ViewPatterns