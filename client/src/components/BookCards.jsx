import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../img/test.jpg'

const BookCard = ({book}) => {
    return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{book.series} {book.issue}</Card.Title>
                <Card.Text>
                  {book.seriesjp} {book.issuejp} <br />
                  {book.publisher} <br />
                  {book.isbn} <br />
                </Card.Text>
                <Button variant="primary">View Patterns</Button>
              </Card.Body>
            </Card>
          );
}

export default BookCard