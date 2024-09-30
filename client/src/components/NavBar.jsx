import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef();

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    if (isExpanded) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <nav ref={navRef} className="navbar sticky-top navbar-expand-lg navbar-light bg-white py-3">
      <div className="container px-5">
        <Link className="navbar-brand" to="/">
          <span className="fw-bolder text-primary">DollDB</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            <div className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dolls
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/dolls">
                    Search Dolls
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/comparedolls">
                    Compare Sizes
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/findsimilar">
                    Find Similar Sizes
                  </Link>
                </li>
              </ul>
            </div>

            <li className="nav-item">
              <Link className="nav-link" to="/patterns">
                Patterns
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/outfits">
                Outfits
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/books">
                Books
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
