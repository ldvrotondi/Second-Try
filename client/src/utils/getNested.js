    //resolves nested keys to arbitrary depths
    const getNested = (obj, path) => {
        const keys = path.split('.')
        let currentValue = obj
    
        for (let key of keys) {
            if (Array.isArray(currentValue)) {
                currentValue = currentValue.map(item => item && item[key]).filter(Boolean)
            } else if (currentValue && currentValue.hasOwnProperty(key)) {
                currentValue = currentValue[key]
            } else {
                return undefined
            }
        }
    
        return Array.isArray(currentValue) ? currentValue.flat() : currentValue
    }

export default getNested