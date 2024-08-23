import getNested from "./getNested"

const filteredData = (data, keys, query) => data.filter((item) => 
    keys.some((key) => {
        const value = getNested(item, key)
        if (Array.isArray(value)) {
            return value.some(v => v?.toLowerCase().includes(query.toLowerCase()))
        }
        return value?.toLowerCase().includes(query.toLowerCase())
    })
)

export default filteredData