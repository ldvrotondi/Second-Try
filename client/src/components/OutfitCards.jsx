import React from "react";
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
  let array = [];
  for (let i = 0; i < data.length; i++) {
    let dollexists = data[i].doll;
    //if doll size not in library, just return a formatted string of the ID
    //still links to a page that shows all relevant patterns, but doll card is not formatted
    if (!dollexists) {
      let str = data[i].dollid;
      str = str.charAt(0).toUpperCase() + str.slice(1);
      if (!array.find(item => item.key === str)) {
        array.push(
          <Link to={`/dolls/${data[i].dollid}`} key={str} className={`innerLink`}>
            {str}
          </Link>
        );
      }
    } else {
      //formats full name of doll and links to each doll's page
      let brand = data[i].doll.brand;
      let line = data[i].doll.line;
      let type = data[i].doll.type;
      let result = [brand, line, type].filter(Boolean).join(" ");
      if (!array.find(item => item.key === result)) {
        array.push(
          <Link to={`/dolls/${data[i].dollid}`} key={result} className={`innerLink`}>
            {result}
          </Link>
        );
      }
    }
  }
  return array.reduce((prev, curr) => [prev, ', ', curr]);
}


//create card of data
const OutfitCards = ({outfit}) => {
  return (
    <Card className="bg-dark text-white border-secondary card-overlay" style={{ margin: '5px' }}>
    <Card.Img variant="top" src={`/images/outfits/${outfit.outfitid}.png`} className="card-img"/>
    <Card.ImgOverlay>
    <Card.Body className="overlay-text">
       <Card.Text>
       <Link to={`/outfits/${outfit.outfitid}`} className={`link`}> {outfit.name} </Link><br />
          <i>From:</i> <Link to={`/books/${outfit.issueid}`} className={`innerLink`}> {outfit.book.series} {outfit.book.issue} </Link><br />
          <i>Designer:</i> {outfit.designer} <br />
          <i>Patterns:</i> {listPatterns(outfit.pattern, 'type')} <br />
          <i>Sizes:</i>  {listSizes(outfit.pattern)}<br />
          
                </Card.Text>
              </Card.Body>
              </Card.ImgOverlay>
            </Card>)
}
  
export default OutfitCards

