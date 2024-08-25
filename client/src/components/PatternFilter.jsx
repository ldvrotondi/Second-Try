import React, { useState } from "react";
import { Dropdown, Form, Button, Container } from "react-bootstrap";
import { Col } from "react-bootstrap"

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
        <Container>
        <Dropdown className="filterDropdown">
            <Dropdown.Toggle className="filterDropdown-toggle ">
                Garment Type
            </Dropdown.Toggle>

            <Dropdown.Menu className="filterDropdown-menu">
            {patternTypes
                .sort((a, b) => a.localeCompare(b))  // Sort in alphabetical order
                .map((type, index) => 
                    { const checkboxId = `checkbox-${type}-${index}`;
                        return(
                <Form.Check
                    key={index}
                    type="checkbox"
                    id={checkboxId}
                    label={`${type.charAt(0).toUpperCase() + type.slice(1)}`}
                    checked={selectedPatterns.includes(type)}
                    onChange={() => handleCheckboxChange(type)}
                />
             )})}
            </Dropdown.Menu>
        </Dropdown>

         <Button onClick={clearAll} className="clear-all-button">
         X
        </Button>
        </Container>
    );
};

export default PatternFilter;