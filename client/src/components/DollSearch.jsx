import React, { useState } from 'react';

const DollSearch = ({ value, onChange, onKeyDown, results, onSelect }) => {
  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleKeyDown = (e) => {
    if (results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev === null ? 0 : Math.min(prev + 1, results.length - 1)));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev === null ? results.length - 1 : Math.max(prev - 1, 0)));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (focusedIndex !== null) {
        onSelect(results[focusedIndex]);
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Search dolls..."
        value={value}
        onChange={onChange}
        onKeyDown={(e) => { 
          handleKeyDown(e); 
          onKeyDown && onKeyDown(e); 
        }} 
      />
      {value && results.length > 0 && (
        <ul className="list-group mt-2">
          {results.map((doll, index) => (
            <li
              key={doll.dollid}
              className={`list-group-item ${index === focusedIndex ? 'active' : ''}`}
              onClick={() => onSelect(doll)}
              onMouseEnter={() => setFocusedIndex(index)}
              style={{ cursor: 'pointer' }}
            >
              {doll.brand} {doll.line} {doll.type}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DollSearch;
