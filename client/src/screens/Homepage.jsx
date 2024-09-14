import React from "react"
import { Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Homepage = () => {
    return (
        <Container>
            <Row>
                <h3>Welcome to the Doll Database!</h3>
                <p>Browse our <Link to={`/dolls`} className={`inner-link`}> collection of doll measurements</Link> to quickly find the right fit for your projects. You can <Link to={`comparedolls`} className={`inner-link`}>compare sizes</Link>, <Link to={`/findsimilar`} className={`inner-link`}>find dolls with similar measurements</Link>, and access a variety of published <Link to={`/patterns`} className={`inner-link`}>patterns</Link> organized by <Link to={`/outfits`} className={`inner-link`}>outfit</Link>. Our catalog also shows which <Link to={`books`} className={`inner-link`}>books</Link> include each pattern, making it easy to find the information you need for your doll-related work.</p>
            </Row>
        </Container>
    )
}

export default Homepage