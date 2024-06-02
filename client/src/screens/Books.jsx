import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import BookCards from '../components/BookCards'

const ViewBooks = () => {
    const [books, setBooks] = useState([])

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
        {
                books.map(book => {
                   return <Col md={8} lg={12} sm={12} key={book.issueid}>
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