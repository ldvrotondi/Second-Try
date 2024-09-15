import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCards from "../components/BookCards";
import SearchBar from "../components/SearchBar";
import filteredData from "../utils/filteredData";
import { bookKeys } from "../utils/searchKeys";

const ViewBooks = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getBookData = async () => {
      const { data } = await axios.get("api/books");
      setBooks(data);
    };
    getBookData();
  }, []);

  return (
    <div className="container px-5 my-3 text-white">
      <div className="text-center">
        <h2 className="display-6 fe-shadow fw-bolder mb-3">View All Books</h2>
      </div>
      <SearchBar query={query} setQuery={setQuery} />
      <div className="row justify-content-center"> 
        {
          filteredData(books, bookKeys, query).map(book => (
            <div key={book.issueid} className="col-md-auto col-sm-auto col-lg-auto mb-4"> 
              <BookCards book={book} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ViewBooks;
