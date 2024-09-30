import React from "react"
import { Link } from "react-router-dom"
import './card.css'

const BookCard = ({ book }) => {
  return (
    <div className="outfit-card">
      <div className="outfit-card-image-wrapper">
        <img
          src={`https://fly.storage.tigris.dev/dolldb-images/books/${book.issueid}.png`}
          alt={`${book.series} ${book.issue}`}
          className="outfit-card-image"
          onError={(e) => (e.target.src = 'https://fly.storage.tigris.dev/dolldb-images/notfound.png')}
        />
      </div>
      <div className="outfit-card-overlay">
        <div className="outfit-card-content">
          <h3 className="outfit-card-title">
            <Link to={`/books/${book.issueid}`} className="outfit-card-link">
              {book.series}: {book.issue}
            </Link>
          </h3>
          {book.seriesjp} {book.issuejp} <br />
          {book.publisher} <br />
          ISBN: {book.isbn}
        </div>
      </div>
    </div>
  )
}


export default BookCard