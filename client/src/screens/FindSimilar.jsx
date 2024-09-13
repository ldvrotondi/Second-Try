import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import DollSearch from "../components/DollSearch";
import DollTable from "../components/DollTable";
import filterByRange from "../utils/filterbyRange"
import getMeasurementRanges from "../utils/getMeasurementRange";
import filterDolls from "../utils/filterDolls"
import { Card } from "react-bootstrap";
import '../components/advancedSearch.css'; 

const FindSimilar = () => {
  const [dolls, setDolls] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDolls, setFilteredDolls] = useState([]);
  const [selectedDoll, setSelectedDoll] = useState(null);
  const [similarDolls, setSimilarDolls] = useState([]);

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
    setSelectedDoll(doll);
    setSearchTerm('');
    setFilteredDolls([]);
    
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

  return (
    <Container >
      <Row style={{ padding: '0.8rem' }}>
        <Col>
        <h3>Find Similar Dolls</h3>
        <p>Enter the name, brand, or type of a doll in the search bar to find similar dolls. This search will return dolls with comparable height, bust, waist, and hip measurements, helping you find compatible clothing sizes.</p>

              <p>You can remove any dolls that you don't want to see from the results. Please note that if you remove the reference doll (the one you searched for), all results will be cleared.</p>
             
          <DollSearch value={searchTerm} onChange={handleSearch} />
          {searchTerm && filteredDolls.length > 0 && (
            <ul className="list-group mt-2">
              {filteredDolls.map((doll) => (
                <li
                  key={doll.dollid}
                  className="list-group-item"
                  onClick={() => handleSelectDoll(doll)}
                  style={{ cursor: 'pointer' }}
                >
                  {doll.brand} {doll.line} {doll.type}
                </li>
              ))}
            </ul>
          )}
        </Col>
      </Row>

      {selectedDoll && (
        <Row>
          <Col>
            <DollTable dolls={similarDolls} onRemoveDoll={handleRemoveDoll} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default FindSimilar;