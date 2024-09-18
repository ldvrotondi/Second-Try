import React, { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"
import DollCard from "../components/DollCards"
import OutfitCards from "../components/OutfitCards"
import '../App.css'
import PatternFilter from "../components/PatternFilter"
import FindSimilarDolls from "../components/FindSimilarDolls"
import filterByPatternType from "../utils/filterbyPattern"
import getMeasurementRanges from "../utils/getMeasurementRange"
import filterByRange from "../utils/filterByRange"
import { Button, Collapse } from "react-bootstrap"
import filterByDoll from "../utils/filterByDoll"


const DollDetails = () => {
    const { id } = useParams()
    const [dolls, setDolls] = useState([])
    const [selectedPatterns, setSelectedPatterns] = useState([])
    const [patternTypes, setPatternTypes] = useState([])
    const [outfits, setOutfits] = useState([])
    const [includeSimilar, setIncludeSimilar] = useState(false)
    const [filteredDolls, setFilteredDolls] = useState([])
    const [selectedDoll, setSelectedDoll] = useState('')
    const [open, setOpen] = useState(false)

    // Get doll data & set active doll
    useEffect(() => {
        const getDollData = async () => {
            try {
                const { data } = await axios.get('/api/dolls')
                setDolls(data)

                const doll = data.find(d => d.dollid === id)
                setSelectedDoll(doll)
                setFilteredDolls(doll ? [doll] : [])
            } catch (error) {
                console.error("Error fetching doll data:", error)
            }
        }
        getDollData()
    }, [id])

    // Get outfit data
    useEffect(() => {
        const getOutfitData = async () => {
            try {
                const { data } = await axios.get('/api/outfits/patterns')
                setOutfits(data)

                // Extract all pattern types for the checkboxes
                const allPatterns = data.flatMap(outfit =>
                    outfit.pattern.map(p => p.type)
                )
                const uniquePatterns = [...new Set(allPatterns)]
                setPatternTypes(uniquePatterns)

            } catch (error) {
                console.error("Error fetching outfit data:", error)
            }
        }

        getOutfitData()
    }, [])



    const handleCheck = () => {
        setIncludeSimilar((prevIncludeSimilar) => {
            const checked = !prevIncludeSimilar

            // update filtered dolls based on "Include Similar" being checked or unchecked
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

    const filteredOutfits = filterByDoll(
        filterByPatternType(outfits, selectedPatterns),
        filteredDolls
    )


    return (
        <div className="container px-5 my-3 text-dark">
            <div className="row">
                <div className="col-md-auto position-static">
                    <DollCard doll={selectedDoll} />
                </div>

                <div className="col">
                    <div className="row justify-content-center mb-3 text-center bg-transparent-white">
                        <div className="col text-custom d-flex justify-content-between align-items-center">
                            <h1>Indexed Outfits</h1>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="advanced-search-collapse"
                                aria-expanded={open}
                                variant="primary"
                                className="ml-3 text-light"
                            >
                                {open ? "Hide Options" : "More Options"}
                            </Button>
                        </div>
                    </div>

                    <Collapse in={open}>
                        <div id="advanced-search-collapse" className="container bg-transparent-white">
                            <hr className="hr-bolder" />
                            <div className="row">
                                <div className="col-md-12">
                                    <PatternFilter
                                        patternTypes={patternTypes}
                                        selectedPatterns={selectedPatterns}
                                        setSelectedPatterns={setSelectedPatterns}
                                    />
                                </div>
                            </div>
                            <hr className="hr-medium" />
                            <div className="row">
                                <div className="col-md-12">
                                    <FindSimilarDolls
                                        includeSimilar={includeSimilar}
                                        onChange={handleCheck}
                                    />
                                </div>
                            </div>
                            <hr className="hr-bolder" />
                        </div>
                    </Collapse>

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
            </div>
        </div>
    )
}

export default DollDetails
