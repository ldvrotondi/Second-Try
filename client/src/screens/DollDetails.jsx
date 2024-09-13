import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Container, Row, Col } from 'react-bootstrap'
import OutfitCards from "../components/OutfitCards";
import { useParams } from "react-router-dom";
import DollCard from "../components/DollCards";
import { outfitKeys } from "../utils/searchKeys";
import filteredData from "../utils/filteredData";
import '../App.css'
import AdvancedSearch from "../components/AdvancedSearch";
import filterByPatternType from "../utils/filterbyPattern";

const DollDetails = () => {
        const {id}  = useParams()
        const [query, setQuery] = useState('')

        const [doll, setDoll] = useState([])

        const [selectedPatterns, setSelectedPatterns] = useState([]);
        const [patternTypes, setPatternTypes] = useState([]);
        const [outfits, setOutfits] = useState([])
    
    //get doll data
        useEffect(() => {
            const getDoll = async () => {
                const {data} = await axios.get(`/api/dolls/doll/${id}`)
                setDoll(data) 
            }
            getDoll()
        },[id]
        )


    //get outfit data
    useEffect(() => {
        const getOutfitData = async () => {
            const {data} = await axios.get(`/api/outfits/bydoll/${id}`)
            setOutfits(data)
            const allPatterns = data.flatMap(outfit => outfit.pattern.map(p => p.type));
            const uniquePatterns = [...new Set(allPatterns)];
            setPatternTypes(uniquePatterns);
        }
        getOutfitData()
    },[id]
    )

    //filter outfits
    const filteredOutfits = filterByPatternType((filteredData(outfits, outfitKeys, query)), selectedPatterns);

    return (
        <>
        <Container fluid >
            <Row >
                <Col md="auto" className="stickyCol">
                        <DollCard doll={doll} />
                </Col>

                <Col>
                    <Row>
                        <Col><h1>Indexed Outfits:</h1></Col>
                        <Row> 
                            <AdvancedSearch query={query} setQuery={setQuery} patternTypes={patternTypes} 
                                selectedPatterns={selectedPatterns} 
                                setSelectedPatterns={setSelectedPatterns} />
                            
                        </Row>
                        </Row>
                        <Row>
                        {filteredOutfits.map(outfit => (
                                    <Col key={outfit.outfitid}>
                                        <OutfitCards outfit={outfit} />
                                    </Col>
                                ))
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
    )
}


export default DollDetails