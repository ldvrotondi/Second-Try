import React from "react";
import Button from 'react-bootstrap/Button';
import { Table } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const DollCard = ({doll}) => {
    return (
        
            <Card style={{ width: '18rem', margin: '5px' }}>
              <Card.Body>
                <Card.Title>{doll.brand} {doll.line}
                <br /><h6>{doll.type}</h6>
                </Card.Title>
                <Card.Text>
                    <Table class="table table-striped">
                        <tr><td>Height:</td><td> {doll.height} cm</td></tr>
                        <tr><td>Head:</td><td> {doll.head} cm</td></tr>
                        <tr><td>Neck:</td><td> {doll.neck} cm</td></tr>
                        <tr><td>Bust:</td><td> {doll.bust} cm</td></tr>
                        <tr><td>Waist:</td><td> {doll.waist} cm</td></tr>
                        <tr><td>Hips:</td><td> {doll.hips} cm</td></tr>
                        <tr><td>Thigh:</td><td> {doll.thigh} cm</td></tr>
                        <tr><td>Calf:</td><td> {doll.calf} cm</td></tr>
                        <tr><td>Shoulders:</td><td> {doll.shoulders} cm</td></tr>
                        <tr><td>Arm Length:</td><td> {doll.armlen} cm</td></tr>
                        <tr><td>Upper Arm:</td><td> {doll.upperarmcirc} cm</td></tr>
                        <tr><td>Lower Arm: </td><td> {doll.lowerarmcirc} cm</td></tr>
                        <tr><td>Wrist:</td><td> {doll.wrist} cm</td></tr>
                        <tr><td>Inseam: </td><td> {doll.inseam} cm</td></tr>
                        <tr><td>Foot Length: </td><td> {doll.footlen} cm</td></tr>
                        <tr><td>Foot Width:</td><td> {doll.footwid} cm</td></tr>
                </Table>
                </Card.Text>
               {/*<Link to={`/patterns/${doll.patternid}`}><Button>View Patterns</Button></Link>*/}
              </Card.Body>
            </Card>
          );
}

export default DollCard