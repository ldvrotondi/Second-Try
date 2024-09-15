import React, { useState, useEffect } from "react";
import axios from 'axios';
import OutfitCards from '../components/OutfitCards';
import filteredData from "../utils/filteredData";
import { outfitKeys } from "../utils/searchKeys";
import AdvancedSearch from "../components/AdvancedSearch";
import filterByPatternType from "../utils/filterbyPattern";

const ViewOutfits = () => {
    const [outfits, setOutfits] = useState([]);
    const [query, setQuery] = useState('');
    const [selectedPatterns, setSelectedPatterns] = useState([]);
    const [patternTypes, setPatternTypes] = useState([]);

    useEffect(() => {
        const getOutfitData = async () => {
            const { data } = await axios.get('api/outfits/patterns');
            setOutfits(data);

            // Extract all pattern types for the filter checkboxes
            const allPatterns = data.flatMap(outfit => outfit.pattern.map(p => p.type));
            const uniquePatterns = [...new Set(allPatterns)];
            setPatternTypes(uniquePatterns);
        };
        getOutfitData();
    }, []);


    const filteredOutfits = filterByPatternType((filteredData(outfits, outfitKeys, query)), selectedPatterns);

    return (
        <div className="container px-5 my-3 text-white">
        <div className="text-center">
          <h2 className="display-6 fe-shadow fw-bolder mb-3">View All Outfits</h2>
        </div>
            <AdvancedSearch
              query={query}
              setQuery={setQuery}
              patternTypes={patternTypes}
              selectedPatterns={selectedPatterns}
              setSelectedPatterns={setSelectedPatterns}
            />
          <div className="row justify-content-center">
            {filteredOutfits.map(outfit => (
              <div key={outfit.outfitid} className="col-md-auto col-sm-auto col-lg-auto mb-4"> 
                <OutfitCards outfit={outfit} />
              </div>
            ))}
          </div>
        </div>
      );
    };
    

export default ViewOutfits;