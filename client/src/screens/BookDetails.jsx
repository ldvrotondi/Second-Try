import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Container, Row, Col, Card} from 'react-bootstrap'
import OutfitCards from "../components/OutfitCards";
import { useParams } from "react-router-dom";
import filteredData from "../utils/filteredData";
import { outfitKeys } from "../utils/searchKeys";
import AdvancedSearch from "../components/AdvancedSearch";
import filterByPatternType from "../utils/filterbyPattern";


const BookDetails = () => {
        const {id}  = useParams()
        const [query, setQuery] = useState('')

        const [series, setSeries] = useState('')
        const [seriesjp, setSeriesJP] = useState('')
        const [issue, setIssue] = useState('')
        const [issuejp, setIssueJP] = useState('')
        const [publisher, setPublisher] = useState('')
        const [isbn, setISBN] = useState(0)

        const [outfits, setOutfits] = useState([])
        const [selectedPatterns, setSelectedPatterns] = useState([]);
        const [patternTypes, setPatternTypes] = useState([]);


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
        },[id]
        )



    useEffect(() => {
        const getOutfitData = async () => {
            const {data} = await axios.get(`/api/outfits/bybook/${id}`)
            setOutfits(data)
            const allPatterns = data.flatMap(outfit => outfit.pattern.map(p => p.type));
            const uniquePatterns = [...new Set(allPatterns)];
            setPatternTypes(uniquePatterns);
        }
        getOutfitData()
    },[id]
    )

    //filter outfits
    const filteredOutfits = filterByPatternType((filteredData(outfits, outfitKeys, query)), selectedPatterns);

    return (
        <>
        <Container >
            <Row>
        <Col md="auto" className="stickyCol">
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
            <Col className="subordinate-container">
            <Row>
               <Col> <h1>Included Patterns:</h1></Col>
               <Row> 
                            <AdvancedSearch query={query} setQuery={setQuery} patternTypes={patternTypes} 
                                selectedPatterns={selectedPatterns} 
                                setSelectedPatterns={setSelectedPatterns} />
                            
                        </Row>
               </Row>
               <Row>
      {filteredOutfits.map(outfit => (
                                    <Col key={outfit.outfitid}>
                                        <OutfitCards outfit={outfit} />
                                    </Col>
                                ))
                        }
            </Row>
            </Col>
            </Row>
        </Container>
    </>
    )
}

export default BookDetails