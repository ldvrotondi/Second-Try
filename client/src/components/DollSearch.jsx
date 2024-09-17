import React, { useState } from 'react';

const DollSearch = ({ value, onChange, results, onSelect }) => {
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

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
        setShowDropdown(false); 
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
        onChange={(e) => {
          onChange(e);
          setShowDropdown(true); // Open dropdown when typing
        }}
        onKeyDown={handleKeyDown}
        onFocus={() => setShowDropdown(true)} // Reopen dropdown on input focus if necessary
      />
      {showDropdown && results.length > 0 && (
        <ul className="list-group mt-2">
          {results.map((doll, index) => (
            <li
              key={doll.dollid}
              className={`list-group-item ${index === focusedIndex ? 'active' : ''}`}
              onClick={() => {
                onSelect(doll);
                setShowDropdown(false); // Close dropdown on selection
              }}
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
