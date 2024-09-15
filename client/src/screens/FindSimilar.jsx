import React, { useState, useEffect } from "react";
import axios from 'axios';
import DollSearch from "../components/DollSearch";
import DollTable from "../components/DollTable";
import filterByRange from "../utils/filterByRange";
import getMeasurementRanges from "../utils/getMeasurementRange";
import filterDolls from "../utils/filterDolls";
import { Link } from "react-router-dom";

const FindSimilar = () => {
  const [dolls, setDolls] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDolls, setFilteredDolls] = useState([]);
  const [selectedDoll, setSelectedDoll] = useState(null);
  const [similarDolls, setSimilarDolls] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(null);

  useEffect(() => {
    const getDollData = async () => {
      const { data } = await axios.get('api/dolls');
      setDolls(data);
    };
    getDollData();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredDolls(filterDolls(dolls, value));
    setFocusedIndex(null); 
  };

  const handleSelectDoll = (doll) => {
    setSelectedDoll(doll);
    setSearchTerm('');
    setFilteredDolls([]);
    setFocusedIndex(null); 

    const measurementRanges = getMeasurementRanges(doll);
    const dollsInRange = filterByRange(dolls, doll, measurementRanges);

    setSimilarDolls([doll, ...dollsInRange]);
  };

  const handleRemoveDoll = (dollid) => {
    setSimilarDolls((prevDolls) =>
      prevDolls.filter((doll) => doll.dollid !== dollid)
    );
    if (selectedDoll && selectedDoll.dollid === dollid) {
      setSelectedDoll(null);
    }
  };

  const handleKeyDown = (e) => {
    if (filteredDolls.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev === null ? 0 : Math.min(prev + 1, filteredDolls.length - 1)));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev === null ? filteredDolls.length - 1 : Math.max(prev - 1, 0)));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (focusedIndex !== null) {
        handleSelectDoll(filteredDolls[focusedIndex]);
      }
    }
  };

  const handleMouseEnter = (index) => {
    setFocusedIndex(index);
  };

  return (
    <section className="py-3 bg-gradient-primary-to-secondary text-white">
      <div className="container px-5 my-3">
        <div className="text-center">
          <h2 className="display-6 fw-bolder mb-3 fe-shadow">Find Similar Dolls</h2>
          <div className="text-center my-2 mx-5">
            <p className="fs-6 text-light fe-shadow">
              Enter the name, brand, or type of a doll in the search bar to find similar dolls. This search will return dolls with comparable height, bust, waist, and hip measurements, helping you find compatible clothing sizes.
            </p>
            <p className="fs-6 text-light fe-shadow">
              You can remove any dolls that you don't want to see from the results. Please note that if you remove the reference doll (the one you searched for), all results will be cleared.
            </p>
            <p className="fs-6 text-light fe-shadow">
              If you would like to compare specific dolls, try the <Link to="/comparedolls" className="fs-6 text-light">Compare Dolls</Link> page.
            </p>
          </div>
          <div className="mb-4">
            <DollSearch
              value={searchTerm}
              onChange={handleSearch}
              onKeyDown={handleKeyDown} 
            />
          </div>
          {searchTerm && filteredDolls.length > 0 && (
            <div className="mt-2">
              <ul className="list-group">
                {filteredDolls.map((doll, index) => (
                  <li
                    key={doll.dollid}
                    className={`list-group-item ${index === focusedIndex ? 'active' : ''}`} 
                    onClick={() => handleSelectDoll(doll)}
                    onMouseEnter={() => handleMouseEnter(index)} 
                    style={{ cursor: 'pointer' }}
                  >
                    {doll.brand} {doll.line} {doll.type}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selectedDoll && (
            <div className="mt-4">
              <div className="row">
                <div className="col">
                  <DollTable dolls={similarDolls} onRemoveDoll={handleRemoveDoll} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FindSimilar;
