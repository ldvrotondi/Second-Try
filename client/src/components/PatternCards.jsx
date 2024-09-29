import React from "react"
import { Link } from "react-router-dom"

const typeUppercase = (str) => {
  return str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str
}

//format doll name as a human-readable string
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
          let result = [brand, line, type].filter(Boolean).join(" ")
          return <Link to={`/dolls/${data.dollid}`} key={result} className={`outfit-card-innerLink`}>
          {result}
        </Link>
          }
  }

  const PatternCard = ({ pattern }) => {
    return (
      <div className="outfit-card">
        <div className="outfit-card-image-wrapper">
          <img
            src={`/images/patterns/${pattern.patternid}.png`}
            alt={pattern.outfit.name}
            className="outfit-card-image"
            onError={(e) => (e.target.src = '/images/notfound.png')}
          />
        </div>
        <div className="outfit-card-overlay">
          <div className="outfit-card-content">
            <h3 className="outfit-card-title">
              <Link to={`/outfits/${pattern.outfitid}`} className="outfit-card-link">
                {typeUppercase(pattern.type)} from {pattern.outfit.name}
              </Link>
            </h3>
            Size: {listSizes(pattern)}<br />
            Designer: {pattern.outfit.designer}<br />
            Source: <Link to={`/books/${pattern.outfit.book.issueid}`} className="outfit-card-innerLink">
              {pattern.outfit.book.series} {pattern.outfit.book.issue}
            </Link>
          </div>
        </div>
      </div>
    )
  }
  
  export default PatternCard
  