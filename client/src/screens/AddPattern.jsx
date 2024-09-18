import React, { useState, useEffect } from "react"
import axios from "axios"
import AdminHeader from "../components/AdminHeader"

const AddPattern = () => {
    const [patterns, setPatterns] = useState([])
    const [outfits, setOutfits] = useState([])
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        const getPatternData = async () => {
            const { data } = await axios.get('/api/patterns/all/')
            setPatterns(data)
        }
        getPatternData()
    }, [])

    const nextPatternID = (Math.max(...patterns.map(pattern => pattern.patternid), 0)) + 1

    useEffect(() => {
        const getOutfitData = async () => {
            const { data } = await axios.get('/api/outfits/patterns/')
            setOutfits(data)
        }
        getOutfitData()
    }, [])

    const nextOutfitID = (Math.max(...outfits.map(outfit => outfit.outfitid), 0))

    const [patternid, setPatternID] = useState(0)
    const [outfitid, setOutfitID] = useState(0)
    const [dollid, setDollID] = useState('')
    const [type, setType] = useState('')

    const addPatternHandler = async (e) => {
        e.preventDefault()
        const data = {
            patternid: patternid,
            outfitid: outfitid,
            dollid: dollid,
            type: type,
        }
        try {
            await axios.post('/api/Patterns/addPattern', data)
            setSuccess(true)
        } catch (error) {
            console.error("There was an error adding the book!", error)
        }
    }

    return (
        <>
            <AdminHeader />
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-6 px-5 my-3 text-custom bg-transparent-white">
                        <h2 className="display-6 fw-bolder text-custom mb-4 text-center">Add New Pattern</h2>
                        <div className="p-4 border rounded shadow-sm bg-light">
                            <form onSubmit={addPatternHandler}>
                                <div className="mb-3">
                                    <label className="form-label">Next Pattern ID: {nextPatternID}</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={patternid}
                                        onChange={(e) => setPatternID(e.target.value)}
                                        placeholder="Enter Pattern ID"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Most Recent Outfit ID: {nextOutfitID}</label>
                                    <br />
                                    <small className="text-muted">Note: Outfits should be added before patterns</small>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={outfitid}
                                        onChange={(e) => setOutfitID(e.target.value)}
                                        placeholder="Enter Outfit ID"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Doll ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={dollid}
                                        onChange={(e) => setDollID(e.target.value)}
                                        placeholder="Enter Doll ID"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Garment Type</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        placeholder="Enter Garment Type"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100 text-light">
                                    Add Pattern
                                </button>
                            </form>
                            {success && (
                            <div className="mt-3 alert alert-success" role="alert">
                                Pattern added successfully!
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPattern
