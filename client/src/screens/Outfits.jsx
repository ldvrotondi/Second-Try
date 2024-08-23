import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import OutfitCards from '../components/OutfitCards'
import SearchBar from "../components/SearchBar";
import filteredData from "../utils/filteredData";
import { outfitKeys } from "../utils/searchKeys";

const ViewOutfits = () => {
    const [outfits, setOutfits] = useState([])
    const [query, setQuery] = useState('');

    useEffect(() => {
        const getOutfitData = async () => {
            const {data} = await axios.get('api/outfits/patterns')
            setOutfits(data)
        }
        getOutfitData()
    },[]
    )

    return (
        <>
       <Container>
        <h1 className='text-left'>All Outfits</h1>
        <hr />
        <Row>
        <SearchBar query={query} setQuery={setQuery} />
        {
                filteredData(outfits, outfitKeys, query).map(outfit => {
                   return <Col key={outfit.outfitid}>
                   <OutfitCards outfit={outfit} />
                   </Col> 
                   
                })
            }
        </Row>
       </Container>
           
            
            </>
    )
}

export default ViewOutfits