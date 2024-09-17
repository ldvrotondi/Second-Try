import React, { useState, useEffect } from "react";
import axios from 'axios';
import PatternCards from '../components/PatternCards'
import filteredData from "../utils/filteredData";
import { outfitKeys, patternKeys } from "../utils/searchKeys";
import AdvancedSearch from "../components/AdvancedSearch";
import getMeasurementRanges from "../utils/getMeasurementRange";
import filterByRange from "../utils/filterByRange";
import filterDolls from "../utils/filterDolls";



const ViewPatterns = () => {
  const [patterns, setPatterns] = useState([])
  const [query, setQuery] = useState('');

  const [filteredDolls, setFilteredDolls] = useState([]);
  const [selectedPatterns, setSelectedPatterns] = useState([]);
  const [patternTypes, setPatternTypes] = useState([]);
  const [includeSimilar, setIncludeSimilar] = useState(false);
  const [dolls, setDolls] = useState([]);
  const [selectedDoll, setSelectedDoll] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getPatternData = async () => {
      const { data } = await axios.get('api/patterns/all/')
      setPatterns(data)
      const uniquePatterns = [...new Set(data.flatMap(pattern => pattern.type))];
      setPatternTypes(uniquePatterns);
    }
    getPatternData()
  }, []
  )

  useEffect(() => {
    const fetchDolls = async () => {
      const { data } = await axios.get('api/dolls');
      setDolls(data);
    };
    fetchDolls();
  }, []);


  const filterByPatternType = (data, selectedPatterns) => {
    if (selectedPatterns.length === 0) return data;
    return data.filter(pattern =>
      selectedPatterns.includes(pattern.type)
    );
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredDolls(filterDolls(dolls, value));
};

  const handleSelectDoll = (doll) => {
    setSelectedDoll(doll);

    const formattedSearchTerm = [doll.brand, doll.line, doll.type]
        .filter(Boolean)
        .join(" ")
        .trim();

    setSearchTerm(formattedSearchTerm);

    // Filter and add similar dolls if "Include Similar" is checked
    let filtered = [doll];
    if (includeSimilar) {
        const measurementRanges = getMeasurementRanges(doll);
        const dollsInRange = filterByRange(dolls, doll, measurementRanges);
        filtered = [...filtered, ...dollsInRange];
    }

    setFilteredDolls(filtered);
};

const handleCheck = () => {
    setIncludeSimilar((prevIncludeSimilar) => {
        const checked = !prevIncludeSimilar;

        // If there's a selected doll, update filtered dolls based on "Include Similar" being checked or unchecked
        if (selectedDoll) {
            let filtered = [selectedDoll];
            if (checked) {
                const measurementRanges = getMeasurementRanges(selectedDoll);
                const dollsInRange = filterByRange(
                    dolls,
                    selectedDoll,
                    measurementRanges
                );
                filtered = [...filtered, ...dollsInRange];
            }
            setFilteredDolls(filtered);
        }

        return checked;
    });
};

const clearDoll = () => {
    setIncludeSimilar(false);
    setSelectedDoll(null);
    setFilteredDolls([]);
    setSearchTerm("");
};

const filterByDoll = (patterns, selectedDolls) => {
    if (selectedDolls.length === 0) return patterns;

    // Create a Set of selected doll IDs for efficient lookup
    const selectedDollIds = new Set(selectedDolls.map(doll => doll.dollid));

    return patterns.filter(pattern => 
        selectedDollIds.has(pattern.dollid)
    );
};


const filteredPatterns = filterByDoll(
  filterByPatternType(filteredData(patterns, patternKeys, query), selectedPatterns),
  filteredDolls
);

  return (
    <div className="container px-5 my-3 text-dark">
      <div className="row justify-content-center mb-4 text-center bg-transparent-white">
        <h2 className="display-6 text-custom fw-bolder">View All Patterns</h2>
      </div>

      <div className="row justify-content-center mb-4 bg-transparent-white">
        <AdvancedSearch
          query={query}
          setQuery={setQuery}
          patternTypes={patternTypes}
          selectedPatterns={selectedPatterns}
          setSelectedPatterns={setSelectedPatterns}
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          filteredDolls={filteredDolls}
          handleSelectDoll={handleSelectDoll}
          clearDoll={clearDoll}
          includeSimilar={includeSimilar}
          handleCheck={handleCheck}
        />
      </div>

      <div className="row justify-content-center bg-transparent-white">
        {filteredPatterns.map(pattern => (
          <div key={pattern.patternid} className="col-md-auto col-sm-auto col-lg-auto mb-4">
            <PatternCards pattern={pattern} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewPatterns