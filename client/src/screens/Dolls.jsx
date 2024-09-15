import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DollSearch from '../components/DollSearch';
import filteredData from "../utils/filteredData";
import { dollKeys } from "../utils/searchKeys";

const ViewDolls = () => {
    const [dolls, setDolls] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDolls, setFilteredDolls] = useState([]);
    const [focusedIndex, setFocusedIndex] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getDollData = async () => {
            const { data } = await axios.get('api/dolls');
            setDolls(data);
        };
        getDollData();
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value) {
            const results = filteredData(dolls, dollKeys, value);
            setFilteredDolls(results);
        } else {
            setFilteredDolls([]);
        }
        setFocusedIndex(null);
    };

    const handleSelectDoll = (doll) => {
        navigate(`${doll.dollid}`);
    };

    const handleKeyDown = (e) => {
        if (filteredDolls.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setFocusedIndex((prev) => (prev === null ? 0 : Math.min(prev + 1, filteredDolls.length - 1)));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setFocusedIndex((prev) => (prev === null ? filteredDolls.length - 1 : Math.max(prev - 1, 0)));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (focusedIndex !== null) {
                handleSelectDoll(filteredDolls[focusedIndex]);
            }
        }
    };

    const handleMouseEnter = (index) => {
        setFocusedIndex(index);
      };

    return (
        <section className="py-3 bg-gradient-primary-to-secondary text-white">
      <div className="container px-5 my-3">
        <div className="text-center">
          <h2 className="display-6 fe-shadow fw-bolder mb-3">View Doll Data</h2>
          </div>
            <div className="mb-4">
                <DollSearch
                    value={searchTerm}
                    onChange={handleSearch}
                    onKeyDown={handleKeyDown} 
                />
            </div>
            {searchTerm && filteredDolls.length > 0 && (
                <div className="mt-2">
                    <ul className="list-group">
                        {filteredDolls.map((doll, index) => (
                            <li
                                key={doll.dollid}
                                className={`list-group-item ${index === focusedIndex ? 'active' : ''}`} 
                                onClick={() => handleSelectDoll(doll)}
                                onMouseEnter={() => handleMouseEnter(index)} 
                                style={{ cursor: 'pointer' }}
                            >
                                {doll.brand} {doll.line} {doll.type}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            </div>
        </section>
    );
};

export default ViewDolls;
