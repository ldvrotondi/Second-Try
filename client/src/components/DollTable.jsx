import React from 'react';
import { Table } from 'react-bootstrap';
import formatMeasurements from "../utils/formatMeasurements";
import { Link } from "react-router-dom";

const DollTable = ({ dolls, onRemoveDoll }) => (
  <Table striped bordered hover className="compare-table">
    <thead>
      <tr>
        <th className="attribute-col">Attribute</th>
        {dolls.map(doll => (
          <th key={doll.dollid} className="doll-header-col">
            <Link
              to="#"
              className="remove-link"
              onClick={(e) => {
                e.preventDefault();
                onRemoveDoll(doll.dollid);
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
      {['height', 'head', 'neck', 'bust', 'waist', 'hips', 'thigh', 'calf', 'shoulders', 'armlen', 'upperarmcirc', 'lowerarmcirc', 'wrist', 'inseam', 'footlen', 'footwid'].map(attr => (
        <tr key={attr}>
          <td>{attr.charAt(0).toUpperCase() + attr.slice(1)}</td>
          {dolls.map(doll => (
            <td key={doll.dollid} className="value-col">
              {formatMeasurements(doll[attr])} cm
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>
);

export default DollTable;