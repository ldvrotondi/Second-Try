import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap';
import DollCards from '../components/DollCards';
import { Link } from "react-router-dom";

const ViewDolls = () => {
    const [dolls, setDolls] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const getDollData = async () => {
            const {data} = await axios.get('api/dolls');
            setDolls(data);
        };
        getDollData();
    }, []);

    const keys = ['brand', 'line', 'type'];

    const handleChange = (value) => {
        setQuery(value);
    };

    const filteredDolls = dolls.filter((item) => 
        keys.some((key) => 
            item[key]?.toLowerCase().includes(query.toLowerCase())
        )
    );

    return (
        <Container>
            <h1 className='text-left'>All Dolls</h1>
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
                    filteredDolls.map(doll => (
                        <Col key={doll.dollid}>
                            <Link to={`${doll.dollid}`} style={{ textDecoration: 'none' }}>
                                <DollCards doll={doll} />
                            </Link>
                        </Col> 
                    ))
                }
            </Row>
        </Container>
    );
};

export default ViewDolls;