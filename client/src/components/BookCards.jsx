import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const BookCard = ({book}) => {
    return (
        
            <Card style={{ width: '18rem', margin: '5px' }}>
              <Card.Img variant="top" src={`/images/books/${book.issueid}.bmp`} />
              <Card.Body>
                <Card.Title>{book.series}: {book.issue}</Card.Title>
                <Card.Text>
                  {book.seriesjp} {book.issuejp} <br />
                  {book.publisher} <br />
                  ISBN: {book.isbn} <br />
                </Card.Text>
                
              <Link to={`${book.issueid}`}><Button>View Details</Button></Link>
              </Card.Body>

            </Card>
          );
}

export default BookCard