import React from "react";
import { Dropdown, Form, Button } from "react-bootstrap";

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

    const handleItemClick = (type) => {
        handleCheckboxChange(type);
    };

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-3">
                    <div className="d-flex align-items-center">
                        <div className="dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100">
                                    Garment Type
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="w-100">
                                    {patternTypes
                                        .sort((a, b) => a.localeCompare(b))  // Sort in alphabetical order
                                        .map((type, index) => {
                                            const checkboxId = `checkbox-${type}-${index}`;
                                            return (
                                                <Dropdown.Item
                                                    key={index}
                                                    as="button"
                                                    className={`d-flex align-items-center ${selectedPatterns.includes(type) ? 'bg-light' : ''}`}
                                                    onClick={() => handleItemClick(type)}
                                                >
                                                    <Form.Check
                                                        type="checkbox"
                                                        id={checkboxId}
                                                        checked={selectedPatterns.includes(type)}
                                                        onChange={() => handleCheckboxChange(type)}
                                                        custom
                                                        className="mr-2"
                                                    />
                                                    <span>{`${type.charAt(0).toUpperCase() + type.slice(1)}`}</span>
                                                </Dropdown.Item>
                                            );
                                        })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Button 
                            onClick={clearAll} 
                            variant="danger" 
                            className="ml-2 p-1"
                            style={{ width: '30px', height: '30px' }}
                        >
                            <span style={{ fontSize: '16px' }}>X</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatternFilter;
