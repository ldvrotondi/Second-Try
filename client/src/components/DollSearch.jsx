import React from 'react';

const DollSearch = ({ value, onChange, onKeyDown }) => (
  <input
    type="text"
    className="form-control"
    placeholder="Search dolls..."
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown} 
  />
);

export default DollSearch;
