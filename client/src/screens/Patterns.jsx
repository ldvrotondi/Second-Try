import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import PatternCards from '../components/PatternCards'

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

    /*const [selectedType, setSelectedType] = useState(null)
    const handleChange = e => {
        setSelectedType(e.target.value)
    }

    const filteredPatterns(patterns,selected)*/

    const keys = ['type', 'outfit.designer', 'outfit.name', 'doll.brand', 'doll.line', 'doll.type'];

    const handleChange = (value) => {
        setQuery(value);
    };

    const getNestedValue = (obj, path) => {
        return path.split('.').reduce((value, key) => value && value[key], obj);
    };

    const filteredPatterns = patterns.filter((item) => 
        keys.some((key) => 
            getNestedValue(item, key)?.toLowerCase().includes(query.toLowerCase())
        )
    );

    return (
        <>
       <Container>
        <h1 className='text-left'>All Patterns</h1>
        <hr />
        <Row>
        <div className="query"> 
                    <input 
                        value={query} 
                        onChange={(e) => handleChange(e.target.value)}
                        placeholder="Search..."
                    />
                </div>
        {
                filteredPatterns.map(pattern => {
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