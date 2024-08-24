import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './card.css';

const BookCard = ({book}) => {
    return (
        
            <Card className="bg-dark text-white card-overlay" style={{ width: '18rem', margin: '5px' }}>
              <Card.Img src={`/images/books/${book.issueid}.png`} />
              <Card.ImgOverlay>
              <Card.Body className="overlay-text">
                <Card.Text className="overlay-text">
                <Link to={`${book.issueid}`} className={`link`}>{book.series}: {book.issue}</Link><br />
                  {book.seriesjp} {book.issuejp} <br />
                  {book.publisher} <br />
                  ISBN: {book.isbn} <br />
                </Card.Text>
              </Card.Body>
              </Card.ImgOverlay>
            </Card>
          );
}

export default BookCard