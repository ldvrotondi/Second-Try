import React from "react"
import { Link } from "react-router-dom"

const Homepage = () => {
  return (
    <div className="container px-5 my-5">
      <div className="text-center bg-transparent-white">
        <h2 className="display-4 fw-bolder mb-4 text-custom">Welcome to the Doll Database!</h2>
        <div className="text-center my-5 text-dark">
          <p>
            Browse our{" "}
            <Link to="/dolls" className="link">
              collection of doll measurements
            </Link>{" "}
            to quickly find the right fit for your projects. You can{" "}
            <Link to="/comparedolls" className="link">
              compare sizes
            </Link>
            ,{" "}
            <Link to="/findsimilar" className="link">
              find dolls with similar measurements
            </Link>
            , and access a variety of published{" "}
            <Link to="/patterns" className="link">
              patterns
            </Link>{" "} (pattern-specific pictures coming soon!) 
            organized by{" "}
            <Link to="/outfits" className="link">
              outfit
            </Link>
            . This catalog also shows which{" "}
            <Link to="/books" className="link">
              books
            </Link>{" "}
            include each pattern, making it easy to find the information you need for your doll projects.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Homepage
