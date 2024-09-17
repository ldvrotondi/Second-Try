import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/NavBar';
import Footer from "./components/Footer";
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
import OutfitDetails from "./screens/OutfitDetails";
import CompareDolls from "./screens/CompareDolls";
import FindSimilar from "./screens/FindSimilar";
import Homepage from "./screens/Homepage";
import Login from "./screens/Login";
import FAQ from "./screens/FAQ";

const App = () => {
  return (
    <div className="wrapper">
      <Router>

        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/faq" element={<FAQ />} />

            <Route path="/books" element={<ViewBooks />} />
            <Route path="/books/:id" element={<BookDetails />} />

            <Route path="/outfits" element={<ViewOutfits />} />
            <Route path="/outfits/:id" element={<OutfitDetails />} />

            <Route path="/patterns" element={<ViewPatterns />} />

            <Route path="/dolls" element={<ViewDolls />} />
            <Route path="/comparedolls" element={<CompareDolls />} />
            <Route path="/findsimilar" element={<FindSimilar />} />
            <Route path="/dolls/:id" element={<DollDetails />} />

            <Route path="/login" element={<Login />} />

              <Route path="/addDoll" element={<AddDoll />} />
              <Route path="/addPattern" element={<AddPattern />} />
              <Route path="/addBook" element={<AddBook />} />
              <Route path="/addOutfit" element={<AddOutfit />} />
            
          </Routes>
        </div>
        <Footer />
      </Router>

    </div>

  );
}

export default App;