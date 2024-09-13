import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import formatMeasurements from "../utils/formatMeasurements.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import concatenateDollInfo from "../utils/concatenateDollInfo.js";

const CompareDolls = () => {
  const [dolls, setDolls] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDolls, setFilteredDolls] = useState([]);
  const [selectedDolls, setSelectedDolls] = useState([]);

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
            {/* Table with headers for each attribute */}
            <Table striped bordered hover className="compare-table">
              <thead>
                <tr>
                  <th className="attribute-col">Attribute</th>
                  {selectedDolls.map(doll => (
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
                  {selectedDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.height)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Head</td>
                  {selectedDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.head)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Neck</td>
                  {selectedDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.neck)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Bust</td>
                  {selectedDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.bust)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Waist</td>
                  {selectedDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.waist)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Hips</td>
                  {selectedDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.hips)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Thigh</td>
                  {selectedDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.thigh)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Calf</td>
                  {selectedDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.calf)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Shoulders</td>
                  {selectedDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.shoulders)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Arm Length</td>
                  {selectedDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.armlen)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Upper Arm</td>
                  {selectedDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.upperarmcirc)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Lower Arm</td>
                  {selectedDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.lowerarmcirc)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Wrist</td>
                  {selectedDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.wrist)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Inseam</td>
                  {selectedDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.inseam)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Foot Length</td>
                  {selectedDolls.map(doll => (
                    <td key={doll.dollid} className="value-col">
                      {formatMeasurements(doll.footlen)} cm
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Foot Width</td>
                  {selectedDolls.map(doll => (
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

export default CompareDolls;