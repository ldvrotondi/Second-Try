import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
        
            <Card style={{ width: '18rem', margin: '5px' }} className="bg-dark text-white card-overlay">
              <Card.Img variant="top" src={`/images/outfits/${pattern.outfitid}.png`} />
              <Card.ImgOverlay>
              <Card.Body className="overlay-text">
                <Card.Text>
                <Link to={`/outfits/${pattern.outfitid}`} className={`link`}>{typeUppercase(pattern.type)} from {pattern.outfit.name}</Link> <br />
                  Size: {listSizes(pattern)} <br />
                  Designer: {pattern.outfit.designer} <br />
                  Source: {pattern.outfit.book.series} {pattern.outfit.book.issue}<br />
                </Card.Text>
              </Card.Body>
              </Card.ImgOverlay>
            </Card>
          );
}

export default PatternCard