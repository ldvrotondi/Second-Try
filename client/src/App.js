import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


import Navbar from './components/NavBar';
import AddDoll from "./screens/AddDoll";
import AddBook from "./screens/AddBook";
import AddOutfit from "./screens/AddOutfit";
import AddPattern from "./screens/AddPattern";
import ViewBooks from "./screens/Books";
import ViewOutfits from "./screens/Outfits";
import ViewDolls from "./screens/Dolls";
import ViewPatterns from "./screens/Patterns";
import BookDetails from "./screens/BookDetails";
import DollDetails from "./screens/DollDetails";
//import PatternDetails from "./screens/PatternDetails";
import OutfitDetails from "./screens/OutfitDetails";
import CompareDolls from "./screens/CompareDolls";
import { Container, Row } from "react-bootstrap";
import FindSimilar from "./screens/FindSimilar";


const App = () => {
  return (
    <Container className="appContainer">
      <Router>
        <Navbar />
        <Row>
          <Routes>
            {/* 
              
              <Route exact path="/dolls/compare" Component={CompareDolls} />*/}
            <Route exact path="/addDoll" Component={AddDoll} />
            <Route exact path="/addPattern" Component={AddPattern} />
            <Route exact path="/addBook" Component={AddBook} />
            <Route exact path="/addOutfit" Component={AddOutfit} />

            <Route exact path="/books" Component={ViewBooks} />
            <Route exact path="/books/:id" Component={BookDetails} />

            <Route exact path="/outfits" Component={ViewOutfits} />
            <Route exact path="/outfits/:id" Component={OutfitDetails} />
            <Route exact path="/patterns" Component={ViewPatterns} />
            {/*<Route exact path="/patterns/:id" Component={PatternDetails} />*/}

            <Route exact path="/dolls" Component={ViewDolls} />
            <Route exact path="/comparedolls" Component={CompareDolls} />
            <Route exact path="/findsimilar" Component={FindSimilar} />
            <Route exact path="/dolls/:id" Component={DollDetails} />
          </Routes>

          <h3>Welcome to the Doll Database!</h3>
          <p>Browse our <Link to={`/dolls`} className={`inner-link`}> collection of doll measurements</Link> to quickly find the right fit for your projects. You can <Link to={`comparedolls`} className={`inner-link`}>compare sizes</Link>, <Link to={`/findsimilar`} className={`inner-link`}>find dolls with similar measurements</Link>, and access a variety of published <Link to={`/patterns`} className={`inner-link`}>patterns</Link> organized by <Link to={`/outfits`} className={`inner-link`}>outfit</Link>. Our catalog also shows which <Link to={`books`} className={`inner-link`}>books</Link> include each pattern, making it easy to find the information you need for your doll-related work.</p>

        </Row>
      </Router>
    </Container>
  );
}

export default App;
