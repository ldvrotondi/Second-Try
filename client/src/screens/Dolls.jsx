import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import DollCards from '../components/DollCards'
import SearchBar from "../components/SearchBar";

import { Link } from "react-router-dom";

const ViewDolls = () => {
    const [dolls, setDolls] = useState([])

    useEffect(() => {
        const getDollData = async () => {
            const {data} = await axios.get('api/dolls')
            setDolls(data)
        }
        getDollData()
    },[]
    )

    return (
        <>
       <Container>
        <h1 className='text-left'>All Dolls</h1>
        <hr />
        <Row>
            <SearchBar />
        {
                dolls.map(doll => {
                   return <Col key={doll.dollid}>
                   <Link to={`${doll.dollid}`} style={{ textDecoration: 'none' }}><DollCards doll={doll} /></Link>
                   </Col> 
                   
                })
            }
        </Row>
       </Container>
           
            
            </>
    )
}

export default ViewDolls