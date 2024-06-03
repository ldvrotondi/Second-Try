import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

const AddBook = () =>{

    //e.preventDefault()

    const [issueid, setIssueID] = useState('')
    const [series, setSeries] = useState('')
    const [seriesjp, setSeriesJP] = useState('')
    const [issue, setIssue] = useState('')
    const [issuejp, setIssueJP] = useState('')
    const [publisher, setPublisher] = useState('')
    const [isbn, setISBN] = useState(0)

    const addBookHandler = async () => {
            const data = {
                issueid: issueid,
                series: series,
                seriesjp: seriesjp,
                issue: issue,
                issuejp: issuejp,
                publisher: publisher,
                isbn: isbn
            }
            await axios.post('/api/books/addbook', data)
    }

    return(
        <>
      <Container>
        <h2>Add New Book</h2>
        <hr />
        <Row>
            <Col>
            <Form onSubmit={addBookHandler}>
            <Form.Group className="mb-3" controlId="issueid">
                <Form.Control type="text" value={issueid} onChange={((e)=> setIssueID(e.target.value))} placeholder="Enter Issue ID" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="series">
                <Form.Control type="text" value={series} onChange={((e)=> setSeries(e.target.value))} placeholder="Enter Series Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="seriesjp">
                <Form.Control type="text" value={seriesjp}  onChange={((e)=> setSeriesJP(e.target.value))} placeholder="Enter Series Name JP" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="issue">
                <Form.Control type="text" value={issue} onChange={((e)=> setIssue(e.target.value))} placeholder="Enter Issue Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="issuejp">
                <Form.Control type="text" value={issuejp} onChange={((e)=> setIssueJP(e.target.value))} placeholder="Enter Issue Name JP" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="publisher">
                <Form.Control type="text" value={publisher} onChange={((e)=> setPublisher(e.target.value))} placeholder="Enter Publisher" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="isbn">
                <Form.Control type="number" value={isbn} onChange={((e)=> setISBN(e.target.value))} placeholder="Enter ISBN" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Book
            </Button>
            </Form>
            </Col>
            </Row>
        </Container>
        </>
    )
}

export default AddBook