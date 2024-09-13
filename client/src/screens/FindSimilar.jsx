import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import formatMeasurements from "../utils/formatMeasurements.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import concatenateDollInfo from "../utils/concatenateDollInfo.js";


const FindSimilar = () => {
    const [dolls, setDolls] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDolls, setFilteredDolls] = useState([]);
    const [selectedDoll, setSelectedDoll] = useState(null);
    const [similarDolls, setSimilarDolls] = useState([]);
  
    useEffect(() => {
      const getDollData = async () => {
        const { data } = await axios.get('api/dolls'); // Ensure this API is working correctly
        setDolls(data);
      };
      getDollData();
    }, []);
  
 
  
    const handleSearch = (e) => {
      const value = e.target.value;
      setSearchTerm(value);
  
      const filtered = dolls.filter((doll) => {
        const concatenated = concatenateDollInfo(doll).toLowerCase();
        return (
          concatenated.includes(value.toLowerCase()) ||
          doll.dollid.toLowerCase().includes(value.toLowerCase())
        );
      });
  
      setFilteredDolls(filtered);
    };
  
    const handleSelectDoll = (doll) => {
      setSelectedDoll(doll);
      setSearchTerm('');
      setFilteredDolls([]);
  
      // Calculate the measurement ranges for filtering
      const measurementRanges = {
        // Apply specific height range logic
        height: (() => {
          const heightNumber = parseFloat(doll.height);
          let minHeight, maxHeight;
      
          if (heightNumber < 35) {
            maxHeight = heightNumber * 1.2;
            minHeight = heightNumber * 0.8;
          } else if (heightNumber < 55) {
            maxHeight = heightNumber * 1.14;
            minHeight = heightNumber * 0.86;
          } else {
            maxHeight = heightNumber * 1.07;
            minHeight = heightNumber * 0.93;
          }
      
          return { min: minHeight, max: maxHeight };
        })(),
        bust: { min: doll.bust * 0.87, max: doll.bust * 1.13 },
        waist: { min: doll.waist * 0.90, max: doll.waist * 1.10 },
        hips: { min: doll.hips * 0.90, max: doll.hips * 1.10 },
      };
      
      const dollsInRange = dolls.filter(otherDoll =>
        otherDoll.dollid !== doll.dollid &&
        otherDoll.height >= measurementRanges.height.min &&
        otherDoll.height <= measurementRanges.height.max &&
        otherDoll.bust >= measurementRanges.bust.min &&
        otherDoll.bust <= measurementRanges.bust.max &&
        otherDoll.waist >= measurementRanges.waist.min &&
        otherDoll.waist <= measurementRanges.waist.max &&
        otherDoll.hips >= measurementRanges.hips.min &&
        otherDoll.hips <= measurementRanges.hips.max
      );
      
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
  
        {selectedDoll && (
          <Row>
            <Col>
              <Table striped bordered hover className="compare-table">
                <thead>
                  <tr>
                    <th className="attribute-col">Attribute</th>
                    {similarDolls.map(doll => (
                      <th key={doll.dollid} className="doll-header-col">
                        <Link
                          to="#"
                          className="remove-link"
                          onClick={(e) => {
                            e.preventDefault();
                            handleRemoveDoll(doll.dollid);
                          }}
                        >
                          Remove
                        </Link>
                      <br />
                      <Link to={`/dolls/${doll.dollid}`} className="doll-link">
                        {doll.brand} <br />
                        <h6>{doll.line} {doll.type}</h6>
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Height</td>
                  {similarDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.height)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Head</td>
                  {similarDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.head)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Neck</td>
                  {similarDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.neck)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Bust</td>
                  {similarDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.bust)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Waist</td>
                  {similarDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.waist)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Hips</td>
                  {similarDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.hips)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Thigh</td>
                  {similarDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.thigh)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Calf</td>
                  {similarDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.calf)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Shoulders</td>
                  {similarDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.shoulders)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Arm Length</td>
                  {similarDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.armlen)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Upper Arm</td>
                  {similarDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.upperarmcirc)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Lower Arm</td>
                  {similarDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.lowerarmcirc)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Wrist</td>
                  {similarDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.wrist)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Inseam</td>
                  {similarDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.inseam)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Foot Length</td>
                  {similarDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.footlen)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Foot Width</td>
                  {similarDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.footwid)} cm
                    </td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default FindSimilar;