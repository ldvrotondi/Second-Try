import React, { useState, useEffect } from "react"
import axios from "axios"
import BookCards from "../components/BookCards"
import SearchBar from "../components/SearchBar"
import filteredData from "../utils/filteredData"
import { bookKeys } from "../utils/searchKeys"

const ViewBooks = () => {
  const [books, setBooks] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    const getBookData = async () => {
      const { data } = await axios.get("api/books")
      setBooks(data)
    }
    getBookData()
  }, [])

  return (
    <div className="container px-5 my-3 text-dark">
      <div className="row justify-content-center mb-4 text-center bg-transparent-white">
        <h2 className="display-6 text-custom fw-bolder">View All Books</h2>
      </div>

      <div className="row justify-content-center mb-4 text-center bg-transparent-white">
        <SearchBar query={query} setQuery={setQuery} />
      </div>
      <div className="row justify-content-center bg-transparent-white">
        {
          filteredData(books, bookKeys, query).map(book => (
            <div key={book.issueid} className="col-md-auto col-sm-auto col-lg-auto mb-4">
              <BookCards book={book} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ViewBooks
