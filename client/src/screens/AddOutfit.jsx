import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

//to do: password protect

const AddOutfit = () =>{

    //e.preventDefault()

    
    const [outfitid, setOutfitID] = useState(0)
    const [issueid, setIssueID] = useState('')
    const [name, setName] = useState('')
    const [designer, setDesigner] = useState('')


    const addOutfitHandler = async () => {
            const data = {
                outfitid: outfitid,
                issueid: issueid,
                name: name,
                designer: designer,

            }
            await axios.post('/api/outfits/addoutfit', data)
    }

    return(
        <>
      <Container>
        <h2>Add New Outfit</h2>
        <hr />
        <Row>
            <Col>
            <Form onSubmit={addOutfitHandler}>
            <Form.Group className="mb-3" controlId="outfitid">
                <Form.Control type="text" value={outfitid} onChange={((e)=> setOutfitID(e.target.value))} placeholder="Enter OutfitID" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="issueid">
                <Form.Control type="text" value={issueid} onChange={((e)=> setIssueID(e.target.value))} placeholder="Enter Issue ID" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
                <Form.Control type="text" value={name}  onChange={((e)=> setName(e.target.value))} placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="designer">
                <Form.Control type="text" value={designer} onChange={((e)=> setDesigner(e.target.value))} placeholder="Enter Designer Name" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Outfit
            </Button>
            </Form>
            </Col>
            </Row>
        </Container>
        </>
    )
}

export default AddOutfit