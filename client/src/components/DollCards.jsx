import React from "react"
import { Link } from "react-router-dom"
import formatMeasurements from "../utils/formatMeasurements.js"

const DollCard = ({ doll }) => {
  return (
    <div className="card" style={{ width: '18rem'}}>
      <div className="card-body">
        <Link to={`${doll.dollid}`} className="text-decoration-none text-custom">
          <h5 className="card-title">{doll.brand}</h5>
          <h6 className="card-subtitle mb-2">{doll.line} {doll.type}</h6>
        </Link>

        <table className="table table-striped mt-3">
          <tbody>
            <tr><td>Height:</td><td className="text-end">{formatMeasurements(doll.height)} cm</td></tr>
            <tr><td>Head:</td><td className="text-end">{formatMeasurements(doll.head)} cm</td></tr>
            <tr><td>Neck:</td><td className="text-end">{formatMeasurements(doll.neck)} cm</td></tr>
            <tr><td>Bust:</td><td className="text-end">{formatMeasurements(doll.bust)} cm</td></tr>
            <tr><td>Waist:</td><td className="text-end">{formatMeasurements(doll.waist)} cm</td></tr>
            <tr><td>Hips:</td><td className="text-end">{formatMeasurements(doll.hips)} cm</td></tr>
            <tr><td>Thigh:</td><td className="text-end">{formatMeasurements(doll.thigh)} cm</td></tr>
            <tr><td>Calf:</td><td className="text-end">{formatMeasurements(doll.calf)} cm</td></tr>
            <tr><td>Shoulders:</td><td className="text-end">{formatMeasurements(doll.shoulders)} cm</td></tr>
            <tr><td>Arm Length:</td><td className="text-end">{formatMeasurements(doll.armlen)} cm</td></tr>
            <tr><td>Upper Arm:</td><td className="text-end">{formatMeasurements(doll.upperarmcirc)} cm</td></tr>
            <tr><td>Lower Arm:</td><td className="text-end">{formatMeasurements(doll.lowerarmcirc)} cm</td></tr>
            <tr><td>Wrist:</td><td className="text-end">{formatMeasurements(doll.wrist)} cm</td></tr>
            <tr><td>Inseam:</td><td className="text-end">{formatMeasurements(doll.inseam)} cm</td></tr>
            <tr><td>Foot Length:</td><td className="text-end">{formatMeasurements(doll.footlen)} cm</td></tr>
            <tr><td>Foot Width:</td><td className="text-end">{formatMeasurements(doll.footwid)} cm</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DollCard