import React from "react"
import { Link } from "react-router-dom"
import './card.css'
import listSizes from "../utils/listSizes"
import listPatterns from "../utils/listPatterns"


const OutfitCards = ({ outfit }) => {
  return (
    <div className="outfit-card">
    <div className="outfit-card-image-wrapper">
      <img src={`/images/outfits/${outfit.outfitid}.png`} 
      alt={outfit.name} 
      className="outfit-card-image" 
      onError={(e) => (e.target.src = '/images/notfound.png')}/>
    </div>
    <div className="outfit-card-overlay">
      <div className="outfit-card-content">
        <h3 className="outfit-card-title">
          <Link to={`/outfits/${outfit.outfitid}`} className="outfit-card-link">{outfit.name}</Link>
        </h3>
          From: <Link to={`/books/${outfit.issueid}`} className="outfit-card-innerLink">{outfit.book.series} {outfit.book.issue}</Link><br />
          Designer: {outfit.designer}<br />
          Patterns: {listPatterns(outfit.pattern, 'type')}<br />
          Sizes: {listSizes(outfit.pattern, 'outfit-card-innerLink')}
      </div>
    </div>
  </div>
  
  )
}

export default OutfitCards
