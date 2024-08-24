import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Container, Row, Col, Card} from 'react-bootstrap'
import OutfitCards from "../components/OutfitCards";
import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import filteredData from "../utils/filteredData";
import { outfitKeys } from "../utils/searchKeys";

const BookDetails = () => {
        const {id}  = useParams()
        const [query, setQuery] = useState('')

        const [series, setSeries] = useState('')
        const [seriesjp, setSeriesJP] = useState('')
        const [issue, setIssue] = useState('')
        const [issuejp, setIssueJP] = useState('')
        const [publisher, setPublisher] = useState('')
        const [isbn, setISBN] = useState(0)


        useEffect(() => {
            const getBook = async () => {
                const {data} = await axios.get(`/api/books/book/${id}`)
                setSeries(data.series)
                setSeriesJP(data.seriesjp)
                setIssue(data.issue)
                setIssueJP(data.issuejp)
                setPublisher(data.publisher)
                setISBN(data.isbn)
            }
            getBook()
        },[]
        )

    const [outfits, setOutfits] = useState([])

    useEffect(() => {
        const getOutfitData = async () => {
            const {data} = await axios.get(`/api/outfits/bybook/${id}`)
            setOutfits(data)
        }
        getOutfitData()
    },[]
    )

    return (
        <>
        <Container fluid >
            <Row>
        <Col md="auto" className="stickyCol">
            
                <h1>Book Details:</h1>
            <Card style={{ width: '18rem', margin: '5px' }}>
              <Card.Img variant="top" src={`/images/books/${id}.png`} />
              <Card.Body>
                <Card.Title>{series}: {issue}</Card.Title>
                <Card.Text>
                  {seriesjp} {issuejp} <br />
                  {publisher} <br />
                  ISBN: {isbn} <br />
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Row>
               <Col> <h1>Included Patterns:</h1></Col>
               <Col>   <SearchBar query={query} setQuery={setQuery} /></Col>
               </Row>
               <Row>
        {
                filteredData(outfits, outfitKeys, query).map(outfit => {
                   return <Col key={outfit.outfitid}>
                   <OutfitCards outfit={outfit} />
                   </Col> 
                   
                })
            }
            </Row>
            </Col>
            </Row>
        </Container>
    </>
    )
}

export default BookDetails