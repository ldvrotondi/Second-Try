import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../img/test.jpg'
import { Link } from "react-router-dom";

const typeUppercase = (str) => {
  return str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str
}

const listSizes = (data) => {
          var dollexists = data.doll
          if (!dollexists){
            let result = data.dollid
            result = typeUppercase(result)
            return result
          }else{
          let brand = data.doll.brand
          let line = data.doll.line
          let type = data.doll.type
          let result = [brand, line, type].filter(Boolean).join(" ");
          return result
          }
  }

const PatternCard = ({pattern}) => {
    return (
        
            <Card style={{ width: '18rem', margin: '5px' }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{typeUppercase(pattern.type)} from {pattern.outfit.name} </Card.Title>
                <Card.Text>
                  Size: {listSizes(pattern)} <br />
                  Designer: {pattern.outfit.designer} <br />
                  Source: {pattern.outfit.book.series} {pattern.outfit.book.issue}<br />
                </Card.Text>
                
              <Link to={`/outfits/${pattern.outfitid}`}><Button>View Details</Button></Link>
              </Card.Body>
            </Card>
          );
}

export default PatternCard