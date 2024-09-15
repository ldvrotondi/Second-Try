import React, {useState, useEffect} from "react";
import axios from 'axios';
import PatternCards from '../components/PatternCards'
import filteredData from "../utils/filteredData";
import {patternKeys} from "../utils/searchKeys";
import AdvancedSearch from "../components/AdvancedSearch";


const ViewPatterns = () => {
    const [patterns, setPatterns] = useState([])
    const [query, setQuery] = useState('');

    const [selectedPatterns, setSelectedPatterns] = useState([]);
    const [patternTypes, setPatternTypes] = useState([]);

    useEffect(() => {
        const getPatternData = async () => {
            const {data} = await axios.get('api/patterns/all/')
            setPatterns(data)
            const uniquePatterns = [...new Set(data.flatMap(pattern => pattern.type))];
            setPatternTypes(uniquePatterns);
        }
        getPatternData()
    },[]
    )

    const filterByPatternType = (data, selectedPatterns) => {
        if (selectedPatterns.length === 0) return data;
        return data.filter(pattern => 
             selectedPatterns.includes(pattern.type)
        );
    };

    const filteredOutfits = filterByPatternType((filteredData(patterns, patternKeys, query)), selectedPatterns);


    return (
        <div className="container px-5 my-3 text-white">
          <div className="text-center">
            <h2 className="display-6 fe-shadow fw-bolder mb-3">View All Patterns</h2>
          </div>
          <AdvancedSearch
            query={query}
            setQuery={setQuery}
            patternTypes={patternTypes}
            selectedPatterns={selectedPatterns}
            setSelectedPatterns={setSelectedPatterns}
          />
          <div className="row justify-content-center">
            {filteredOutfits.map(pattern => (
              <div key={pattern.patternid} className="col-md-auto col-sm-auto col-lg-auto mb-4">
                <PatternCards pattern={pattern} />
              </div>
            ))}
          </div>
        </div>
      );
    }      

export default ViewPatterns