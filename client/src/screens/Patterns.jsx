import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import PatternCards from '../components/PatternCards'

const ViewPatterns = () => {
    const [patterns, setPatterns] = useState([])

    useEffect(() => {
        const getPatternData = async () => {
            const {data} = await axios.get('api/patterns/all/')
            setPatterns(data)
        }
        getPatternData()
    },[]
    )

    /*const [selectedType, setSelectedType] = useState(null)
    const handleChange = e => {
        setSelectedType(e.target.value)
    }

    const filteredPatterns(patterns,selected)*/

    return (
        <>
       <Container>
        <h1 className='text-left'>All Patterns</h1>
        <hr />
        <Row>
        {
                patterns.map(pattern => {
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