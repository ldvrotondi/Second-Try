import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import BookCards from '../components/BookCards'
import SearchBar from "../components/SearchBar";
import filteredData from "../utils/filteredData";
import { bookKeys } from "../utils/searchKeys";

const ViewBooks = () => {
    const [books, setBooks] = useState([])
    const [query, setQuery] = useState('');

    useEffect(() => {
        const getBookData = async () => {
            const {data} = await axios.get('api/books')
            setBooks(data)
        }
        getBookData()
    },[]
    )


    return (
        <>
       <Container>
        <h1 className='text-left'>All Books</h1>
        <hr />
        <Row>
        <SearchBar query={query} setQuery={setQuery} />
        {
                filteredData(books, bookKeys, query).map(book => {
                   return <Col key={book.issueid}>
                   <BookCards book={book} />
                   </Col> 
                   
                })
            }
        </Row>
       </Container>
           
            
            </>
    )
}

export default ViewBooks