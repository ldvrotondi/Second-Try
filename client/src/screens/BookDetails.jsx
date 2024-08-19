import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Container, Row, Col, Card} from 'react-bootstrap'
import OutfitCards from "../components/OutfitCards";
//import { Link } from "react-router-dom";
import image from '../img/test.jpg'
import { useParams } from "react-router-dom";

const BookDetails = () => {
        const {id}  = useParams()

        const [series, setSeries] = useState('')
        const [seriesjp, setSeriesJP] = useState('')
        const [issue, setIssue] = useState('')
        const [issuejp, setIssueJP] = useState('')
        const [publisher, setPublisher] = useState('')
        const [isbn, setISBN] = useState(0)


        useEffect(() => {
            const getBook = async () => {
                const {data} = await axios.get(`/api/books/book/${id}`)
                console.log(data)
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
        <Container>
        <Col>
            <Row>
                <h1>Book Details:</h1>
            <Card style={{ width: '18rem', margin: '5px' }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{series}: {issue}</Card.Title>
                <Card.Text>
                  {seriesjp} {issuejp} <br />
                  {publisher} <br />
                  ISBN: {isbn} <br />
                </Card.Text>
              </Card.Body>
            </Card>
            </Row>
            <Row>
                <h1>Included Patterns:</h1>
        {
                outfits.map(outfit => {
                   return <Col key={outfit.outfitid}>
                   <OutfitCards outfit={outfit} />
                   </Col> 
                   
                })
            }
            </Row>
            </Col>
        </Container>
    </>
    )
}

export default BookDetails