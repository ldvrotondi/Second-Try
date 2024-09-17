import React from "react";
import { Form, Button } from "react-bootstrap";

const PatternFilter = ({ patternTypes, selectedPatterns, setSelectedPatterns }) => {
    const handleCheckboxChange = (type) => {
        setSelectedPatterns((prev) =>
            prev.includes(type)
                ? prev.filter((t) => t !== type)
                : [...prev, type]
        );
    };

    const clearAll = () => {
        setSelectedPatterns([]);
    };

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className=" text-custom">Filter by Garment Type</h5>
                        <Button 
                            onClick={clearAll} 
                            variant="danger" 
                            className="p-1"
                        >Clear Garment Type
                        </Button>
                    </div>
                    <div className="row">
                        {patternTypes
                            .sort((a, b) => a.localeCompare(b))  // Sort in alphabetical order
                            .map((type, index) => {
                                const checkboxId = `checkbox-${type}-${index}`;
                                return (
                                    <div key={index} className="col-md-4 col-lg-3 mb-2">
                                        <Form.Check
                                            type="checkbox"
                                            id={checkboxId}
                                            label={type.charAt(0).toUpperCase() + type.slice(1)}
                                            checked={selectedPatterns.includes(type)}
                                            onChange={() => handleCheckboxChange(type)}
                                            custom
                                        />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatternFilter;
