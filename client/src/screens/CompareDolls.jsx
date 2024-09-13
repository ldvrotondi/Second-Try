import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import concatenateDollInfo from "../utils/concatenateDollInfo.js";
import filterDolls from "../utils/filterDolls.js";
import DollTable from "../components/DollTable.jsx";

const CompareDolls = () => {
  const [dolls, setDolls] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDolls, setFilteredDolls] = useState([]);
  const [selectedDolls, setSelectedDolls] = useState([]);

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
  };

  const handleRemoveDoll = (dollid) => {
    setSelectedDolls((prevSelectedDolls) =>
      prevSelectedDolls.filter((doll) => doll.dollid !== dollid)
    );
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <input
            type="text"
            className="form-control"
            placeholder="Search dolls..."
            value={searchTerm}
            onChange={handleSearch}
          />

          {searchTerm && filteredDolls.length > 0 && (
            <ul className="list-group mt-2">
              {filteredDolls.map((doll) => (
                <li
                  key={doll.dollid}
                  className="list-group-item"
                  onClick={() => handleSelectDoll(doll)}
                  style={{ cursor: 'pointer' }}
                >
                  {concatenateDollInfo(doll)}
                </li>
              ))}
            </ul>
          )}
        </Col>
      </Row>

      {selectedDolls.length > 0 && (
        <Row>
        <Col>
          <DollTable dolls={selectedDolls} onRemoveDoll={handleRemoveDoll} />
        </Col>
      </Row>
      )}
    </Container>
  );
};

export default CompareDolls;