import React from 'react';
import formatMeasurements from "../utils/formatMeasurements";
import { Link } from "react-router-dom";

const DollTable = ({ dolls, onRemoveDoll }) => (
  <div className="container mt-3">
    <div className="table-responsive">
      <table className="table responsive table-bordered bg-white text-dark">
        <thead>
          <tr className="font-weight-bold">
            <th className="fw-bold text-center">Attribute</th>
            {dolls.map(doll => (
              <th key={doll.dollid} className="text-center" >
                <Link
                  to="#"
                  className="text-danger fw-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    onRemoveDoll(doll.dollid);
                  }}
                >
                  Remove
                </Link>
                <br />
                <Link to={`/dolls/${doll.dollid}`} className="text-primary fw-normal">
                  {doll.brand} <br />
                  {doll.line}  <br />
                  {doll.type}
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {['height', 'head', 'neck', 'bust', 'waist', 'hips', 'thigh', 'calf', 'shoulders', 'arm length', 'upper arm circ.', 'lower arm circ.', 'wrist', 'inseam', 'foot length', 'foot width'].map(attr => (
            <tr key={attr}>
              <td className="fw-bold text-center">
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
