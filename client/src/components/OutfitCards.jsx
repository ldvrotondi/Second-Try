import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './card.css';


//single list of all pattern types within an outfit
const listPatterns = (data, value) => {
  let array = []
      for (let i = 0; i < data.length; i++) {
        let str = data[i][value]
        str = str.charAt(0).toUpperCase() + str.slice(1)
        if (!array.includes(str)){
        array.push(str)
        }
      };
    let text = array.join(', ');
    return text
  } 

//sizes that an outfit has patterns for
  const listSizes = (data) => {
    let array = []
        for (let i = 0; i < data.length; i++) {
            var dollexists = data[i].doll
            if (!dollexists){
              let str = data[i].dollid
              str = str.charAt(0).toUpperCase() + str.slice(1)
              if (!array.includes(str)){
              array.push(str)
              }
            }else{
            let brand = data[i].doll.brand
            let line = data[i].doll.line
            let type = data[i].doll.type
            let result = [brand, line, type].filter(Boolean).join(" ");
            if (!array.includes(result)){
              array.push(result);
            }
          }
        };
      let text = array.join(', ');
      return text
    } 


//create card of data
const OutfitCards = ({outfit}) => {
  return (
    <Card className="bg-dark text-white card-overlay" style={{ width: '18rem', margin: '5px' }}>
    <Card.Img variant="top" src={`/images/outfits/${outfit.outfitid}.bmp`} />
    <Card.ImgOverlay>
    <Card.Body className="overlay-text">
       <Card.Text>
       <Link to={`/outfits/${outfit.outfitid}`} className={`link`}> {outfit.name} </Link><br />
          From: {outfit.book.series} {outfit.book.issue} <br />
          Designer: {outfit.designer} <br />
          Patterns: {listPatterns(outfit.pattern, 'type')} <br />
          Sizes:  {listSizes(outfit.pattern)}<br />
          
                </Card.Text>
              </Card.Body>
              </Card.ImgOverlay>
            </Card>)
}
  
export default OutfitCards

