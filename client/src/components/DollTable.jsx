import React from 'react';
import formatMeasurements from "../utils/formatMeasurements";
import { Link } from "react-router-dom";

const DollTable = ({ dolls, onRemoveDoll }) => (
  <div className="container mt-3">
    <div className="table-responsive">
      <table className="table table-striped table-bordered bg-white text-dark">
        <thead>
          {/* Row for the doll names and links */}
          <tr className="font-weight-bold">
            <th className="fw-bold table-attribute-col text-start">Name</th>
            {dolls.map(doll => (
              <th key={doll.dollid} className="text-center table-data-col">
                <Link to={`/dolls/${doll.dollid}`} className="text-primary fw-bold">
                  {doll.brand} <br />
                  {doll.line} <br />
                  {doll.type}
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Row for the "Remove" buttons */}
          <tr>
            <td className="fw-bold text-start">Actions</td>
            {dolls.map(doll => (
              <td key={doll.dollid} className="text-center">
                <Link
                  to="#"
                  className="doll-remove-link"
                  onClick={(e) => {
                    e.preventDefault();
                    onRemoveDoll(doll.dollid);
                  }}
                >
                  Remove
                </Link>
              </td>
            ))}
          </tr>

          {/* Rows for the doll attributes */}
          {['height', 'head', 'neck', 'bust', 'waist', 'hips', 'thigh', 'calf', 'shoulders', 'arm length', 'upper arm circ.', 'lower arm circ.', 'wrist', 'inseam', 'foot length', 'foot width'].map(attr => (
            <tr key={attr}>
              <td className="fw-bold text-start">
                {attr.charAt(0).toUpperCase() + attr.slice(1)}
              </td>
              {dolls.map(doll => (
                <td key={doll.dollid} className="text-center">
                  {formatMeasurements(doll[attr])} cm
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default DollTable;
