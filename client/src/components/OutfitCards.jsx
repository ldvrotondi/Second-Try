import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './card.css';
import listSizes from "../utils/listSizes";
import listPatterns from "../utils/listPatterns";


const OutfitCards = ({ outfit }) => {
  return (
    <div className="outfit-card">
    <div className="outfit-card-image-wrapper">
      <img src={`/images/outfits/${outfit.outfitid}.png`} alt={outfit.name} className="outfit-card-image"/>
    </div>
    <div className="outfit-card-overlay">
      <div className="outfit-card-content">
        <h3 className="outfit-card-title">
          <a href={`/outfits/${outfit.outfitid}`} className="outfit-card-link">{outfit.name}</a>
        </h3>
          From: <a href={`/books/${outfit.issueid}`} className="outfit-card-innerLink">{outfit.book.series} {outfit.book.issue}</a><br />
          Designer: {outfit.designer}<br />
          Patterns: {listPatterns(outfit.pattern, 'type')}<br />
          Sizes: {listSizes(outfit.pattern, 'outfit-card-innerLink')}
      </div>
    </div>
  </div>
  
  );
};

export default OutfitCards;
