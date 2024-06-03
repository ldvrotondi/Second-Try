import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../img/test.jpg'
import { Link } from "react-router-dom";

const PatternCard = ({pattern}) => {
    return (
        
            <Card style={{ width: '18rem', margin: '5px' }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{pattern.dollid} {pattern.type}</Card.Title>
                <Card.Text>
                  Outfit: {pattern.outfitid} <br />
                </Card.Text>
                
              <Link to={`/patterns/${pattern.patternid}`}><Button>View Details</Button></Link>
              </Card.Body>
            </Card>
          );
}

export default PatternCard