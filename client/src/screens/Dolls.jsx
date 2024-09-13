import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap';
import DollCards from '../components/DollCards';
import SearchBar from "../components/SearchBar";
import filteredData from "../utils/filteredData";
import {dollKeys} from "../utils/searchKeys";

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

    return (
        <Container>
            <h1 className='text-left'>All Dolls</h1>
            <hr />
            <Row>
        <SearchBar query={query} setQuery={setQuery} />
                {
                    filteredData(dolls, dollKeys, query).map(doll => (
                        <Col key={doll.dollid}>
                           
                                <DollCards doll={doll} />
                        </Col> 
                    ))
                }
            </Row>
        </Container>
    );
};

export default ViewDolls;