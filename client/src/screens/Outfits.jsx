import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import OutfitCards from '../components/OutfitCards'

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

    const keys = ['pattern.type', 'designer', 'name', 'pattern.doll.brand', 'pattern.doll.line', 'pattern.doll.type', 'book.series'];

    const handleChange = (value) => {
        setQuery(value);
    };

    const getNestedValue = (obj, path) => {
        return path.split('.').reduce((value, key) => {
            return (value && value[key] !== undefined) ? value[key] : undefined;
        }, obj);
    };

    const filteredOutfits = outfits.filter((item) => 
        keys.some((key) => 
            getNestedValue(item, key)?.toLowerCase().includes(query.toLowerCase())
        )
    );

    return (
        <>
       <Container>
        <h1 className='text-left'>All Outfits</h1>
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
                filteredOutfits.map(outfit => {
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