import React, { useState, useEffect } from "react"
import axios from "axios"
import AdminHeader from "../components/AdminHeader"

const AddOutfit = () => {
    const [outfitid, setOutfitID] = useState(0)
    const [issueid, setIssueID] = useState('')
    const [name, setName] = useState('')
    const [designer, setDesigner] = useState('')
    const [outfits, setOutfits] = useState([])
    const [success, setSuccess] = useState(false)

    const addOutfitHandler = async (e) => {
        e.preventDefault()
        const data = {
            outfitid: outfitid,
            issueid: issueid,
            name: name,
            designer: designer,
        }
        try {
            await axios.post('/api/outfits/addoutfit', data)
            setSuccess(true)
        } catch (error) {
            console.error("There was an error adding the book!", error)
        }
    }

    useEffect(() => {
        const getOutfitData = async () => {
            const { data } = await axios.get('/api/outfits/patterns/')
            setOutfits(data)
        }
        getOutfitData()
    }, [])

    const nextOutfitID = (Math.max(...outfits.map(outfit => outfit.outfitid), 0)) + 1

    return (
        <>
            <AdminHeader />
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-6 px-5 my-3 text-custom bg-transparent-white">
                        <h2 className="display-6 fw-bolder text-custom mb-4 text-center">Add New Outfit</h2>
                        <div className="p-4 border rounded shadow-sm bg-light">
                            <form onSubmit={addOutfitHandler}>
                                <div className="mb-3">
                                    <label className="form-label">Next Outfit ID: {nextOutfitID}</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={outfitid}
                                        onChange={(e) => setOutfitID(e.target.value)}
                                        placeholder="Enter Outfit ID"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Issue ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={issueid}
                                        onChange={(e) => setIssueID(e.target.value)}
                                        placeholder="Enter Issue ID"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter Outfit Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Designer</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={designer}
                                        onChange={(e) => setDesigner(e.target.value)}
                                        placeholder="Enter Designer Name"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100 text-light">
                                    Add Outfit
                                </button>
                            </form>
                            {success && (
                            <div className="mt-3 alert alert-success" role="alert">
                                Outfit added successfully!
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddOutfit
