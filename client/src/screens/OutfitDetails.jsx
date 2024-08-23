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

const OutfitDetails = () => {
    const {id}  = useParams()
    const [query, setQuery] = useState('')
    
    const [outfits, setOutfits] = useState([])

    useEffect(() => {
        const getOutfit = async () => {
            const {data} = await axios.get(`/api/outfits/patterns/${id}`)
            console.log(data.outfitid)
            setOutfits(data) 
        }
        getOutfit()
    },[]
    )


    const [patterns, setPatterns] = useState([])

    useEffect(() => {
        const getPatternData = async () => {
            const {data} = await axios.get(`/api/patterns/byoutfit/${id}`)
            setPatterns(data)
        }
        getPatternData()
    },[]
    )


return (
    <>
    <Container>
    <Col>
        <Row>
            <h1>Outfit Details:</h1>

            {
            outfits.map(outfit => {
               return <Col key={outfit.outfit}>
                
               <OutfitCards outfit={outfit} /></Col>
            })}
        </Row>
        <Row>
            <h1>Associated Patterns:</h1>
            <SearchBar query={query} setQuery={setQuery} />
        {
                filteredData(patterns,patternKeys,query).map(pattern => {
                   return <Col key={pattern.patternid}>
                   <PatternCards pattern={pattern} />
                   </Col> 
                   
                })
            }
        </Row>
        </Col>
    </Container>
</>
)
}

export default OutfitDetails