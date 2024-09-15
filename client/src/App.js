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

const App = () => {
  return (
    <header>
                <div class="container pb-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-xxl-5">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/addDoll" element={<AddDoll />} />
            <Route path="/addPattern" element={<AddPattern />} />
            <Route path="/addBook" element={<AddBook />} />
            <Route path="/addOutfit" element={<AddOutfit />} />
            <Route path="/books" element={<ViewBooks />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="/outfits" element={<ViewOutfits />} />
            <Route path="/outfits/:id" element={<OutfitDetails />} />
            <Route path="/patterns" element={<ViewPatterns />} />
            <Route path="/dolls" element={<ViewDolls />} />
            <Route path="/comparedolls" element={<CompareDolls />} />
            <Route path="/findsimilar" element={<FindSimilar />} />
            <Route path="/dolls/:id" element={<DollDetails />} />
          </Routes>
        <Footer />
      </Router>
     
                        </div>
                    </div>
                </div>
            </header>
  );
}

export default App;