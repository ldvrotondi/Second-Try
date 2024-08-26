const filterByPatternType = (data, selectedPatterns) => {
    if (selectedPatterns.length === 0) return data;
    return data.filter(outfit => 
        outfit.pattern.some(p => selectedPatterns.includes(p.type))
    );
};

export default filterByPatternType