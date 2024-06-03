import React, { useState } from "react";
import {Container, Row, Col} from 'react-bootstrap'
import DollCard from "../components/DollCards";
import SearchBar from "../components/SearchBar";

const CompareDolls = () => {
    const [results, setResults] = useState([])


    return (<>
        <Container>
            <Row>
<Col>
<SearchBar setResults={setResults}/>
<DollCard doll={results.dollid} />
</Col>
            </Row>
        </Container>
        </>
    )
}

export default CompareDolls