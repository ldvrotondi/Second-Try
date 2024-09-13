import React from "react";
import { Table } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import formatMeasurements from "../utils/formatMeasurements.js";

const DollCard = ({doll}) => {

    return (
            <Card style={{ width: '18rem', margin: '5px' }}>
              <Card.Body>
                <Card.Title> <Link to={`${doll.dollid}`} className={"outerLink"}> {doll.brand} <br />
                <h6>{doll.line} {doll.type}</h6> <br />
                </Link>
                </Card.Title>
                <Card.Text>
                    <Table class="table table-striped">
                        <tr><td>Height:</td><td style={{ textAlign: 'right' }}> {formatMeasurements(doll.height)} cm</td></tr>
                        <tr><td>Head:</td><td style={{ textAlign: 'right' }}> {formatMeasurements(doll.head)} cm</td></tr>
                        <tr><td>Neck:</td><td style={{ textAlign: 'right' }}> {formatMeasurements(doll.neck)} cm</td></tr>
                        <tr><td>Bust:</td><td style={{ textAlign: 'right' }}> {formatMeasurements(doll.bust)} cm</td></tr>
                        <tr><td>Waist:</td><td style={{ textAlign: 'right' }}> {formatMeasurements(doll.waist)} cm</td></tr>
                        <tr><td>Hips:</td><td style={{ textAlign: 'right' }}> {formatMeasurements(doll.hips)} cm</td></tr>
                        <tr><td>Thigh:</td><td style={{ textAlign: 'right' }}> {formatMeasurements(doll.thigh)} cm</td></tr>
                        <tr><td>Calf:</td><td style={{ textAlign: 'right' }}> {formatMeasurements(doll.calf)} cm</td></tr>
                        <tr><td>Shoulders:</td><td style={{ textAlign: 'right' }}> {formatMeasurements(doll.shoulders)} cm</td></tr>
                        <tr><td>Arm Length:</td><td style={{ textAlign: 'right' }}> {formatMeasurements(doll.armlen)} cm</td></tr>
                        <tr><td>Upper Arm:</td><td style={{ textAlign: 'right' }}> {formatMeasurements(doll.upperarmcirc)} cm</td></tr>
                        <tr><td>Lower Arm: </td><td style={{ textAlign: 'right' }}> {formatMeasurements(doll.lowerarmcirc)} cm</td></tr>
                        <tr><td>Wrist:</td><td style={{ textAlign: 'right' }}> {formatMeasurements(doll.wrist)} cm</td></tr>
                        <tr><td>Inseam: </td><td style={{ textAlign: 'right' }}> {formatMeasurements(doll.inseam)} cm</td></tr>
                        <tr><td>Foot Length: </td><td style={{ textAlign: 'right' }}> {formatMeasurements(doll.footlen)} cm</td></tr>
                        <tr><td>Foot Width:</td><td style={{ textAlign: 'right' }}> {formatMeasurements(doll.footwid)} cm</td></tr>
                </Table>
                </Card.Text>
               
              </Card.Body>
            </Card>
          );
}

export default DollCard
