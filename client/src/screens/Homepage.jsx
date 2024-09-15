import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <section className="py-5 bg-gradient-primary-to-secondary text-white">
      <div className="container px-5 my-5">
        <div className="text-center">
          <h2 className="display-4 fw-bolder mb-4 fe-shadow">Welcome to the Doll Database!</h2>
          <div className="text-center my-5 fe-shadow">
            <p>
              Browse our{" "}
              <Link to="/dolls" className="link-light">
                collection of doll measurements
              </Link>{" "}
              to quickly find the right fit for your projects. You can{" "}
              <Link to="/comparedolls" className="link-light">
                compare sizes
              </Link>
              ,{" "}
              <Link to="/findsimilar" className="link-light">
                find dolls with similar measurements
              </Link>
              , and access a variety of published{" "}
              <Link to="/patterns" className="link-light">
                patterns
              </Link>{" "}
              organized by{" "}
              <Link to="/outfits" className="link-light">
                outfit
              </Link>
              . This catalog also shows which{" "}
              <Link to="/books" className="link-light">
                books
              </Link>{" "}
              include each pattern, making it easy to find the information you need for your doll-related work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
