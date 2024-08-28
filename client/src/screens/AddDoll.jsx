import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

//to do: password protect

const AddDoll = () =>{
    
    const [dollid, setDollID] = useState('')
    const [brand, setBrand] = useState('')
    const [line, setLine] = useState('')
    const [type, setType] = useState('')
    const [height, setHeight] = useState(0)
    const [head, setHead] = useState(0)
    const [neck, setNeck] = useState(0)
    const [bust, setBust] = useState(0)
    const [waist, setWaist] = useState(0)
    const [hips, setHips] = useState(0)
    const [thigh, setThigh] = useState(0)
    const [calf, setCalf] = useState(0)
    const [shoulders, setShoulders] = useState(0)
    const [armlen, setArmlen] = useState(0)
    const [upperarmcirc, setUpperarmcirc] = useState(0)
    const [lowerarmcirc, setLowerarmcirc] = useState(0)
    const [wrist, setWrist] = useState(0)
    const [inseam, setInseam] = useState(0)
    const [footlen, setFootlen] = useState(0)
    const [footwid, setFootwid] = useState(0)

    const AddDollHandler = async () => {
            const data = {
                dollid: dollid,
                brand: brand,
                line: line,
                type: type,
                height: height,
                head: head,
                neck: neck,
                bust: bust,
                waist: waist,
                hips: hips,
                thigh: thigh,
                calf: calf,
                shoulders: shoulders,
                armlen: armlen,
                upperarmcirc: upperarmcirc,
                lowerarmcirc: lowerarmcirc,
                wrist: wrist,
                inseam: inseam,
                footlen: footlen,
                footwid: footwid,

            }
            await axios.post('/api/dolls/adddoll', data)
    }

    return(
        <>
      <Container>
        <h2>Add New Doll</h2>
        <hr />
            <Col>
            <Form onSubmit={AddDollHandler}>

            <Form.Group className="mb-3" as={Row} controlId="dollid">
            <Form.Label> Doll ID: </Form.Label>
               <Form.Control type="text" value={dollid} onChange={((e)=> setDollID(e.target.value))} placeholder="Enter Doll ID" />
            </Form.Group>

           
            <Form.Group as={Row} className="mb-3" controlId="brand">
            <Form.Label> Brand:   </Form.Label>
                <Form.Control type="text" value={brand} onChange={((e)=> setBrand(e.target.value))} placeholder="Enter Brand" />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="Line">
            <Form.Label>  Line: </Form.Label>
                <Form.Control type="text" value={line} onChange={((e)=> setLine(e.target.value))} placeholder="Enter Line" />
            </Form.Group>
           
            <Form.Group as={Row} className="mb-3" controlId="type">
            <Form.Label> Type: </Form.Label>
                <Form.Control type="text" value={type} onChange={((e)=> setType(e.target.value))} placeholder="Enter Type" />
            </Form.Group>

             <Form.Group as={Row} className="mb-3" controlId="height">
             <Form.Label>  Height: </Form.Label>
             <Form.Control type="text" value={height} onChange={((e)=> setHeight(e.target.value))} placeholder="Enter Height" />
               </Form.Group> 

            <Form.Group as={Row} className="mb-3" controlId="head">
            <Form.Label>Head: </Form.Label>
            <Form.Control type="text" value={head} onChange={((e)=> setHead(e.target.value))} placeholder="Enter Head Size" />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="neck">
            <Form.Label>Neck: </Form.Label>
            <Form.Control type="text" value={neck} onChange={((e)=> setNeck(e.target.value))} placeholder="Enter Neck Size" />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="bust">
            <Form.Label>Bust: </Form.Label>
            <Form.Control type="text" value={bust} onChange={((e)=> setBust(e.target.value))} placeholder="Enter Bust Size" />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="waist">
            <Form.Label>Waist: </Form.Label>
            <Form.Control type="text" value={waist} onChange={((e)=> setWaist(e.target.value))} placeholder="Enter Waist Size" />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="hips">
            <Form.Label>Hips: </Form.Label>
            <Form.Control type="text" value={hips} onChange={((e)=> setHips(e.target.value))} placeholder="Enter Hip Size" />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="thigh">
            <Form.Label>Thigh: </Form.Label>
            <Form.Control type="text" value={thigh} onChange={((e)=> setThigh(e.target.value))} placeholder="Enter Thigh Size" />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="calf">
            <Form.Label>Calf: </Form.Label>
            <Form.Control type="text" value={calf} onChange={((e)=> setCalf(e.target.value))} placeholder="Enter Calf Size" />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="shoulders">
            <Form.Label>Shoulders: </Form.Label>
               <Form.Control type="text" value={shoulders} onChange={((e)=> setShoulders(e.target.value))} placeholder="Enter Shoulder Width" />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="armlen">
            <Form.Label>Arm Length: </Form.Label>
            <Form.Control type="text" value={armlen} onChange={((e)=> setArmlen(e.target.value))} placeholder="Enter Arm Length" />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="upperarmcirc">
            <Form.Label>Upper Arm: </Form.Label>
                <Form.Control type="text" value={upperarmcirc} onChange={((e)=> setUpperarmcirc(e.target.value))} placeholder="Enter Upper Arm Circumference" />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="lowerarmcirc">
            <Form.Label>Lower Arm: </Form.Label>
                <Form.Control type="text" value={lowerarmcirc} onChange={((e)=> setLowerarmcirc(e.target.value))} placeholder="Enter Lower Arm Circumference" />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="wrist">
            <Form.Label>Wrist: </Form.Label>
                <Form.Control type="text" value={wrist} onChange={((e)=> setWrist(e.target.value))} placeholder="Enter Wrist Circumference" />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="inseam">
            <Form.Label>Inseam: </Form.Label>
            <Form.Control type="text" value={inseam} onChange={((e)=> setInseam(e.target.value))} placeholder="Enter Inseam Length" />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="footlen">
            <Form.Label>Foot Length: </Form.Label>
            <Form.Control type="text" value={footlen} onChange={((e)=> setFootlen(e.target.value))} placeholder="Enter Foot Length" />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="footwid">
            <Form.Label>Foot Width: </Form.Label>
            <Form.Control type="text" value={footwid} onChange={((e)=> setFootwid(e.target.value))} placeholder="Enter Foot Width" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Doll
            </Button>
            </Form>
            </Col>
        </Container>
        </>
    )
}

export default AddDoll