import React, { useState, useEffect } from "react"
import axios from "axios"
import OutfitCards from "../components/OutfitCards"
import filteredData from "../utils/filteredData"
import { outfitKeys } from "../utils/searchKeys"
import AdvancedSearch from "../components/AdvancedSearch"
import filterByPatternType from "../utils/filterbyPattern"
import filterByDoll from "../utils/filterByDoll"
import filterDolls from "../utils/filterDolls"
import getMeasurementRanges from "../utils/getMeasurementRange"
import filterByRange from "../utils/filterByRange"

const ViewOutfits = () => {
    const [outfits, setOutfits] = useState([])
    const [query, setQuery] = useState("")
    const [selectedPatterns, setSelectedPatterns] = useState([])
    const [patternTypes, setPatternTypes] = useState([])
    const [dolls, setDolls] = useState([])
    const [filteredDolls, setFilteredDolls] = useState([])
    const [selectedDoll, setSelectedDoll] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [includeSimilar, setIncludeSimilar] = useState(false)

    useEffect(() => {
        const getOutfitData = async () => {
            const { data } = await axios.get("api/outfits/patterns")
            setOutfits(data)

            const allPatterns = data.flatMap((outfit) =>
                outfit.pattern.map((p) => p.type)
            )
            const uniquePatterns = [...new Set(allPatterns)]
            setPatternTypes(uniquePatterns)
        }
        getOutfitData()
    }, [])

    useEffect(() => {
        const fetchDolls = async () => {
            const { data } = await axios.get("api/dolls")
            setDolls(data)
        }
        fetchDolls()
    }, [])

    const handleSearch = (e) => {
        const value = e.target.value
        setSearchTerm(value)
        setFilteredDolls(filterDolls(dolls, value))
    }

    const handleSelectDoll = (doll) => {
        setSelectedDoll(doll)

        const formattedSearchTerm = [doll.brand, doll.line, doll.type]
            .filter(Boolean)
            .join(" ")
            .trim()

        setSearchTerm(formattedSearchTerm)

        // Filter and add similar dolls if "Include Similar" is checked
        let filtered = [doll]
        if (includeSimilar) {
            const measurementRanges = getMeasurementRanges(doll)
            const dollsInRange = filterByRange(dolls, doll, measurementRanges)
            filtered = [...filtered, ...dollsInRange]
        }

        setFilteredDolls(filtered)
    }

    const handleCheck = () => {
        setIncludeSimilar((prevIncludeSimilar) => {
            const checked = !prevIncludeSimilar

            // If there's a selected doll, update filtered dolls based on "Include Similar" being checked or unchecked
            if (selectedDoll) {
                let filtered = [selectedDoll]
                if (checked) {
                    const measurementRanges = getMeasurementRanges(selectedDoll)
                    const dollsInRange = filterByRange(
                        dolls,
                        selectedDoll,
                        measurementRanges
                    )
                    filtered = [...filtered, ...dollsInRange]
                }
                setFilteredDolls(filtered)
            }

            return checked
        })
    }

    const clearDoll = () => {
        setIncludeSimilar(false)
        setSelectedDoll(null)
        setFilteredDolls([])
        setSearchTerm("")
    }

    const filteredOutfits = filterByDoll(
        filterByPatternType(filteredData(outfits, outfitKeys, query), selectedPatterns),
        filteredDolls
    )

    return (
        <div className="container px-5 my-3 text-dark">
            <div className="row justify-content-center mb-4 text-center bg-transparent-white">
                <h2 className="display-6 text-custom fw-bolder">View All Outfits</h2>
            </div>
            <div className="row justify-content-center mb-4 bg-transparent-white">
                <AdvancedSearch
                    query={query}
                    setQuery={setQuery}
                    patternTypes={patternTypes}
                    selectedPatterns={selectedPatterns}
                    setSelectedPatterns={setSelectedPatterns}
                    searchTerm={searchTerm}
                    handleSearch={handleSearch}
                    filteredDolls={filteredDolls}
                    handleSelectDoll={handleSelectDoll}
                    clearDoll={clearDoll}
                    includeSimilar={includeSimilar}
                    handleCheck={handleCheck}
                />
            </div>

            <div className="row justify-content-center bg-transparent-white">
                {filteredOutfits.length === 0 ? (
                    <div className="col-12 text-center mt-4">
                        <p className="lead text-dark">No results found.</p>
                    </div>
                ) : (
                    filteredOutfits.map((outfit) => (
                        <div key={outfit.outfitid} className="col-md-auto col-sm-auto col-lg-auto mb-4">
                            <OutfitCards outfit={outfit} />
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default ViewOutfits
