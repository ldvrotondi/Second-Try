import React from 'react';

const DollSearch = ({ value, onChange }) => (
  <input
    type="text"
    className="form-control"
    placeholder="Search dolls..."
    value={value}
    onChange={onChange}
  />
);

export default DollSearch;