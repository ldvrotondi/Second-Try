import React from 'react';

const FindSimilarDolls = ({ includeSimilar, onChange }) => {


    return (
            <div className="form-check mt-3">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="includeSimilarCheckbox"
                    checked={includeSimilar}
                    onChange={onChange}
                />
                <label className="form-check-label" htmlFor="includeSimilarCheckbox">
                    Include similar doll sizes
                </label>
            </div>
        );
        

};

export default FindSimilarDolls;
