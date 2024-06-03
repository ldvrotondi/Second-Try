import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import DollCards from '../components/DollCards'

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
        {
                dolls.map(doll => {
                   return <Col md={8} lg={12} sm={6} key={doll.issueid}>
                   <DollCards doll={doll} />
                   </Col> 
                   
                })
            }
        </Row>
       </Container>
           
            
            </>
    )
}

export default ViewDolls