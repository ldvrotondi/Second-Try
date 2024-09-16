import { useState } from "react";
import filterByRange from "../utils/filterByRange";
import getMeasurementRanges from "../utils/getMeasurementRange";
import filterDolls from "../utils/filterDolls";
import DollSearch from "./DollSearch";

const FindSimilarDolls = ({ dolls, filteredDolls, setFilteredDolls }) => {
    const [includeSimilar, setIncludeSimilar] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDoll, setSelectedDoll] = useState(null);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        setFilteredDolls(filterDolls(dolls, value));
    };

    const handleSelectDoll = (doll) => {
        setSelectedDoll(doll);
        setSearchTerm('');
        setFilteredDolls([]);

        if (includeSimilar) {
            // Determine similar dolls based on the selected doll
            const measurementRanges = getMeasurementRanges(doll);
            const dollsInRange = filterByRange(dolls, doll, measurementRanges);
            setFilteredDolls([doll, ...dollsInRange]);
        } else {
            setFilteredDolls([doll]);
        }
    };

    const handleCheckboxChange = () => {
        setIncludeSimilar(prev => {
            const addSimilar = !prev;
            if (selectedDoll) {
                const measurementRanges = getMeasurementRanges(selectedDoll);
                const dollsInRange = filterByRange(dolls, selectedDoll, measurementRanges);
                setFilteredDolls(currentFilteredDolls => {
                    if (addSimilar) {
                        return [selectedDoll, ...dollsInRange];
                    } else {
                        return currentFilteredDolls.filter(doll => doll.dollid === selectedDoll.dollid);
                    }
                });
            }
            return addSimilar;
        });
    };

    return (
        <div className="mb-4">
            <DollSearch
                value={searchTerm}
                onChange={handleSearch}
                results={filteredDolls}
                onSelect={handleSelectDoll}
            />
            <div className="form-check mt-3">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="includeSimilarCheckbox"
                    checked={includeSimilar}
                    onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="includeSimilarCheckbox">
                    Include similar dolls
                </label>
            </div>
        </div>
    );
};

export default FindSimilarDolls;
