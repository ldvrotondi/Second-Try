import React from "react";
import Button from 'react-bootstrap/Button';
import { Table } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const DollCard = ({doll}) => {
    return (
        
            <Card style={{ width: '18rem', margin: '5px' }}>
              <Card.Body>
                <Card.Title>{doll.brand} <br />
                <h6>{doll.line} {doll.type}</h6>
                </Card.Title>
                <Card.Text>
                    <Table class="table table-striped">
                        <tr><td>Height:</td><td style={{ textAlign: 'right' }}> {doll.height} cm</td></tr>
                        <tr><td>Head:</td><td style={{ textAlign: 'right' }}> {doll.head} cm</td></tr>
                        <tr><td>Neck:</td><td style={{ textAlign: 'right' }}> {doll.neck} cm</td></tr>
                        <tr><td>Bust:</td><td style={{ textAlign: 'right' }}> {doll.bust} cm</td></tr>
                        <tr><td>Waist:</td><td style={{ textAlign: 'right' }}> {doll.waist} cm</td></tr>
                        <tr><td>Hips:</td><td style={{ textAlign: 'right' }}> {doll.hips} cm</td></tr>
                        <tr><td>Thigh:</td><td style={{ textAlign: 'right' }}> {doll.thigh} cm</td></tr>
                        <tr><td>Calf:</td><td style={{ textAlign: 'right' }}> {doll.calf} cm</td></tr>
                        <tr><td>Shoulders:</td><td style={{ textAlign: 'right' }}> {doll.shoulders} cm</td></tr>
                        <tr><td>Arm Length:</td><td style={{ textAlign: 'right' }}> {doll.armlen} cm</td></tr>
                        <tr><td>Upper Arm:</td><td style={{ textAlign: 'right' }}> {doll.upperarmcirc} cm</td></tr>
                        <tr><td>Lower Arm: </td><td style={{ textAlign: 'right' }}> {doll.lowerarmcirc} cm</td></tr>
                        <tr><td>Wrist:</td><td style={{ textAlign: 'right' }}> {doll.wrist} cm</td></tr>
                        <tr><td>Inseam: </td><td style={{ textAlign: 'right' }}> {doll.inseam} cm</td></tr>
                        <tr><td>Foot Length: </td><td style={{ textAlign: 'right' }}> {doll.footlen} cm</td></tr>
                        <tr><td>Foot Width:</td><td style={{ textAlign: 'right' }}> {doll.footwid} cm</td></tr>
                </Table>
                </Card.Text>
               
              </Card.Body>
            </Card>
          );
}

export default DollCard
