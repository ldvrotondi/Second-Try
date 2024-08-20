import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import BookCards from '../components/BookCards'

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

    const keys = ['series', 'issue', 'publisher'];

    const handleChange = (value) => {
        setQuery(value);
    };

    const filteredBooks = books.filter((item) => 
        keys.some((key) => 
            item[key]?.toLowerCase().includes(query.toLowerCase())
        )
    );

    return (
        <>
       <Container>
        <h1 className='text-left'>All Books</h1>
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
                filteredBooks.map(book => {
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