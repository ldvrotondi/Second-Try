import React, { useState, useEffect } from "react";
import axios from 'axios';
import concatenateDollInfo from "../utils/concatenateDollInfo";
import filterDolls from "../utils/filterDolls";
import DollTable from "../components/DollTable";
import DollSearch from "../components/DollSearch";
import { Link } from "react-router-dom";

const CompareDolls = () => {
  const [dolls, setDolls] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDolls, setFilteredDolls] = useState([]);
  const [selectedDolls, setSelectedDolls] = useState([]);
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
    setSelectedDolls((prevSelectedDolls) => {
      if (!prevSelectedDolls.some(selected => selected.dollid === doll.dollid)) {
        return [...prevSelectedDolls, doll];
      }
      return prevSelectedDolls;
    });

    setSearchTerm('');
    setFilteredDolls([]);
    setFocusedIndex(null); 
  };

  const handleRemoveDoll = (dollid) => {
    setSelectedDolls((prevSelectedDolls) =>
      prevSelectedDolls.filter((doll) => doll.dollid !== dollid)
    );
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
    
      <div className="container px-5 my-3 text-white">
        <div className="text-center">
          <h2 className="display-6 fw-bolder mb-3 fe-shadow">Compare Dolls</h2>
          <div className="text-center my-2 mx-5">
            <p className="fs-6 text-light fe-shadow">
              Enter the name, brand, or type of a doll in the search bar to view its data. Once you’ve selected a doll, you can search for additional dolls to add them to the table.
            </p>
            <p className="fs-6 text-light fe-shadow">
              You can remove any dolls from the results if you no longer wish to see them.
            </p>
            <p className="fs-6 text-light fe-shadow">
              If you would like to see all sizes similar to a specific doll, try the <Link to="/findsimilar" className="fs-6 text-light"> Find Similar </Link> page.
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
                    {concatenateDollInfo(doll)}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedDolls.length > 0 && (
            <div className="mt-4">
              <div className="row">
                <div className="col">
                  <DollTable dolls={selectedDolls} onRemoveDoll={handleRemoveDoll} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
  );
};

export default CompareDolls;
