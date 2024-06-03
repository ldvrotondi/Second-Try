import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import OutfitCards from '../components/OutfitCards'

const ViewOutfits = () => {
    const [outfits, setOutfits] = useState([])

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
        {
                outfits.map(outfit => {
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