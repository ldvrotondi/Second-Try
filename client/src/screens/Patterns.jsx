import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import PatternCards from '../components/PatternCards'
import SearchBar from "../components/SearchBar";
import filteredData from "../utils/filteredData";
import {patternKeys} from "../utils/searchKeys";

const ViewPatterns = () => {
    const [patterns, setPatterns] = useState([])
    const [query, setQuery] = useState('');

    useEffect(() => {
        const getPatternData = async () => {
            const {data} = await axios.get('api/patterns/all/')
            setPatterns(data)
        }
        getPatternData()
    },[]
    )

    return (
        <>
       <Container>
        <h1 className='text-left'>All Patterns</h1>
        <hr />
        <Row>
        <SearchBar query={query} setQuery={setQuery} />
        {
                filteredData(patterns,patternKeys,query).map(pattern => {
                   return <Col key={pattern.patternid}>
                   <PatternCards pattern={pattern} />
                   </Col> 
                   
                })
            }
        </Row>
       </Container>
           
            
            </>
    )
}

export default ViewPatterns