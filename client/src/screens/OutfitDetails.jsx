import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import OutfitCards from "../components/OutfitCards";
//import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PatternCards from "../components/PatternCards";
import SearchBar from "../components/SearchBar";
import filteredData from "../utils/filteredData";
import { patternKeys } from "../utils/searchKeys";
import AdvancedSearch from "../components/AdvancedSearch";

const OutfitDetails = () => {
    const {id}  = useParams()
    const [query, setQuery] = useState('')
    
    const [outfits, setOutfits] = useState([])
    
    const [patterns, setPatterns] = useState([])
    const [selectedPatterns, setSelectedPatterns] = useState([]);
    const [patternTypes, setPatternTypes] = useState([]);

    useEffect(() => {
        const getOutfit = async () => {
            const {data} = await axios.get(`/api/outfits/patterns/${id}`)
            console.log(data.outfitid)
            setOutfits(data) 
        }
        getOutfit()
    },[]
    )



    useEffect(() => {
        const getPatternData = async () => {
            const {data} = await axios.get(`/api/patterns/byoutfit/${id}`)
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
    
        <Row>
        <Col>
            <h1>Outfit Details:</h1>

            {
            outfits.map(outfit => {
               return <Col key={outfit.outfit}>
                
               <OutfitCards outfit={outfit} /></Col>
            })}
            
        </Col>
   <Col>
            <h1>Associated Patterns:</h1>
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

export default OutfitDetails