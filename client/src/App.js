import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/NavBar';
import AddDoll from "./screens/AddDoll";
import ViewBooks from "./screens/Books";
import ViewOutfits from "./screens/Outfits";
import ViewDolls from "./screens/Dolls";
import ViewPatterns from "./screens/Patterns";
import BookDetails from "./screens/BookDetails";
import DollDetails from "./screens/DollDetails";
import PatternDetails from "./screens/PatternDetails";
import OutfitDetails from "./screens/OutfitDetails";

/*const App = () => {
    return(<div>
      <Navbar />
  <OutfitCards /></div>
   );
}*/

const App = () => {
    return(
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/addDoll" Component={AddDoll} />
        <Route exact path="/books" Component={ViewBooks} />
        <Route exact path="/books/:id" Component={BookDetails} />
        <Route exact path="/outfits" Component={ViewOutfits} />
        <Route exact path="/outfits/:id" Component={OutfitDetails} />
        <Route exact path="/patterns" Component={ViewPatterns} />
        <Route exact path="/patterns/:id" Component={PatternDetails} />
        <Route exact path="/dolls" Component={ViewDolls} />
        <Route exact path="/dolls/:id" Component={DollDetails} />
      </Routes>
    </Router>
   );
}

export default App;
