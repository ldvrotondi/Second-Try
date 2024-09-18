const filterByDoll = (data, selectedDolls) => {
    if (selectedDolls.length === 0) return data

    // Convert selectedDolls to a Set for more efficient lookups
    const selectedDollIds = new Set(selectedDolls.map(doll => doll.dollid))

    return data.filter(outfit =>
        outfit.pattern.some(p => selectedDollIds.has(p.dollid))
    )
}

export default filterByDoll