import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

//to do: password protect

const AddPattern = () =>{

    //e.preventDefault()

    const [patterns, setPatterns] = useState([])
    const [outfits, setOutfits] = useState([])

    useEffect(() => {
        const getPatternData = async () => {
            const {data} = await axios.get('api/patterns/all/')
            setPatterns(data)
        }
        getPatternData()
    },[]
    )

    const nextPatternID = (Math.max(...patterns.map(pattern => pattern.patternid), 0))+1

    useEffect(() => {
        const getOutfitData = async () => {
            const {data} = await axios.get('api/outfits/patterns/')
            setOutfits(data)
        }
        getOutfitData()
    },[]
    )

    const nextOutfitID = (Math.max(...outfits.map(outfit => outfit.outfitid), 0))

    
    const [patternid, setPatternID] = useState(0)
    const [outfitid, setOutfitID] = useState(0)
    const [dollid, setDollID] = useState('')
    const [type, setType] = useState('')


    const addPatternHandler = async () => {
            const data = {
                patternid: patternid,
                outfitid: outfitid,
                dollid: dollid,
                type: type,

            }
            await axios.post('/api/Patterns/addPattern', data)
    }

    return(
        <>
      <Container>
        <h2>Add New Pattern</h2>
        <hr />
        <Row>
            <Col>
            <Form onSubmit={addPatternHandler}>
            <Form.Group className="mb-3" controlId="Patternid">
                Next Pattern ID: {nextPatternID}
                <Form.Control type="text" value={patternid} onChange={((e)=> setPatternID(e.target.value))} placeholder="Enter Pattern ID" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="outfitid">
                Most Recent Outfit ID: {nextOutfitID}
                <br />
                Note: Outfits should be added before patterns
                <Form.Control type="text" value={outfitid} onChange={((e)=> setOutfitID(e.target.value))} placeholder="Enter Outfit ID" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dollid">
                <Form.Control type="text" value={dollid}  onChange={((e)=> setDollID(e.target.value))} placeholder="Enter Doll ID" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="type">
                <Form.Control type="text" value={type} onChange={((e)=> setType(e.target.value))} placeholder="Enter Garment Type" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Pattern
            </Button>
            </Form>
            </Col>
            </Row>
        </Container>
        </>
    )
}

export default AddPattern