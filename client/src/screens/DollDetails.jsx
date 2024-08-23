import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Container, Row, Col, Card} from 'react-bootstrap'
import OutfitCards from "../components/OutfitCards";
//import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import DollCard from "../components/DollCards";
import SearchBar from "../components/SearchBar";
import { outfitKeys } from "../utils/searchKeys";
import filteredData from "../utils/filteredData";

const DollDetails = () => {
        const {id}  = useParams()
        const [query, setQuery] = useState('')

        const [doll, setDoll] = useState([])


        useEffect(() => {
            const getDoll = async () => {
                const {data} = await axios.get(`/api/dolls/doll/${id}`)
                setDoll(data) 
            }
            getDoll()
        },[]
        )


    const [outfits, setOutfits] = useState([])

    useEffect(() => {
        const getOutfitData = async () => {
            const {data} = await axios.get(`/api/outfits/bydoll/${id}`)
            setOutfits(data)
        }
        getOutfitData()
    },[]
    )


    return (
        <>
        <Container>
        <Col>
            <Row>
                <h1>Doll Details:</h1>
                <DollCard doll={doll} />
            </Row>
            <Row>
                <h1>Indexed Outfits:</h1>
                <SearchBar query={query} setQuery={setQuery} />
        {
                filteredData(outfits, outfitKeys, query).map(outfit => {
                   return <Col key={outfit.outfitid}>
                   <OutfitCards outfit={outfit} />
                   </Col> 
                   
                })
            }
            </Row>
            </Col>
        </Container>
    </>
    )
}


export default DollDetails