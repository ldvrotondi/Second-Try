import React, { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"
import OutfitCards from "../components/OutfitCards"
import filteredData from "../utils/filteredData"
import { outfitKeys } from "../utils/searchKeys"
import AdvancedSearch from "../components/AdvancedSearch"
import filterByPatternType from "../utils/filterbyPattern"
import filterByDoll from "../utils/filterByDoll"
import filterDolls from "../utils/filterDolls"
import getMeasurementRanges from "../utils/getMeasurementRange"
import filterByRange from "../utils/filterByRange"

const BookDetails = () => {
    const { id } = useParams()
    const [query, setQuery] = useState('')
    const [series, setSeries] = useState('')
    const [seriesjp, setSeriesJP] = useState('')
    const [issue, setIssue] = useState('')
    const [issuejp, setIssueJP] = useState('')
    const [publisher, setPublisher] = useState('')
    const [isbn, setISBN] = useState(0)
    const [outfits, setOutfits] = useState([])
    const [selectedPatterns, setSelectedPatterns] = useState([])
    const [patternTypes, setPatternTypes] = useState([])
    const [filteredDolls, setFilteredDolls] = useState([])
    const [selectedDoll, setSelectedDoll] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [includeSimilar, setIncludeSimilar] = useState(false)
    const [dolls, setDolls] = useState([])

    useEffect(() => {
        const getBook = async () => {
            const { data } = await axios.get(`/api/books/book/${id}`)
            setSeries(data.series)
            setSeriesJP(data.seriesjp)
            setIssue(data.issue)
            setIssueJP(data.issuejp)
            setPublisher(data.publisher)
            setISBN(data.isbn)
        }
        getBook()
    }, [id])

    useEffect(() => {
        const getOutfitData = async () => {
            const { data } = await axios.get(`/api/outfits/bybook/${id}`)
            setOutfits(data)

            // Extract unique doll IDs from the outfits for the advanced search component
            const allDollIds = data.flatMap(outfit =>
                outfit.pattern.map(p => p.dollid)
            )
            const uniqueDollIds = [...new Set(allDollIds)]
            getDollData(uniqueDollIds)

            // Extract unique pattern types from the outfits for the advanced search component
            const allPatterns = data.flatMap(outfit => outfit.pattern.map(p => p.type))
            const uniquePatterns = [...new Set(allPatterns)]
            setPatternTypes(uniquePatterns)
        }

        const getDollData = async (dollIds) => {
            const { data } = await axios.get('/api/dolls')
            // Filter dolls to only include those with dollid in the pattern set
            const filtered = data.filter(doll => dollIds.includes(doll.dollid))
            setDolls(filtered)
        }

        getOutfitData()
    }, [id])

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
            <div className="row">

                <div className="col-md-auto position-static">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={`/images/books/${id}.png`} className="card-img-top" alt="Book cover" />
                        <div className="card-body">
                            <h5 className="card-title">{series}: {issue}</h5>
                            <p className="card-text">
                                {seriesjp} {issuejp} <br />
                                {publisher} <br />
                                ISBN: {isbn} <br />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="row justify-content-center mb-3 text-center bg-transparent-white">
                        <div className="col text-custom d-flex justify-content-between align-items-center">
                            <h1>Included Patterns</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center bg-transparent-white mt-3">
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
                    <div className="row justify-content-center bg-transparent-white mt-3">
                        {filteredOutfits.map(outfit => (
                            <div className="col-md-auto col-sm-auto col-lg-auto mb-4" key={outfit.outfitid}>
                                <OutfitCards outfit={outfit} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetails
