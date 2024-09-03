import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './card.css';
import listSizes from "../utils/listSizes";
import listPatterns from "../utils/listPatterns";


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
          <i>Sizes:</i>  {listSizes(outfit.pattern, `innerLink`)}<br />
          
                </Card.Text>
              </Card.Body>
              </Card.ImgOverlay>
            </Card>)
}
  
export default OutfitCards

