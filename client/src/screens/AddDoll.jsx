import React, { useState } from "react"
import axios from "axios"
import AdminHeader from "../components/AdminHeader"

const AddDoll = () => {
    const [dollid, setDollID] = useState('')
    const [brand, setBrand] = useState('')
    const [line, setLine] = useState('')
    const [type, setType] = useState('')
    const [height, setHeight] = useState(0)
    const [head, setHead] = useState(0)
    const [neck, setNeck] = useState(0)
    const [bust, setBust] = useState(0)
    const [waist, setWaist] = useState(0)
    const [hips, setHips] = useState(0)
    const [thigh, setThigh] = useState(0)
    const [calf, setCalf] = useState(0)
    const [shoulders, setShoulders] = useState(0)
    const [armlen, setArmlen] = useState(0)
    const [upperarmcirc, setUpperarmcirc] = useState(0)
    const [lowerarmcirc, setLowerarmcirc] = useState(0)
    const [wrist, setWrist] = useState(0)
    const [inseam, setInseam] = useState(0)
    const [footlen, setFootlen] = useState(0)
    const [footwid, setFootwid] = useState(0)
    const [success, setSuccess] = useState(false)

    const AddDollHandler = async (e) => {
        e.preventDefault()
        const data = {
            dollid,
            brand,
            line,
            type,
            height,
            head,
            neck,
            bust,
            waist,
            hips,
            thigh,
            calf,
            shoulders,
            armlen,
            upperarmcirc,
            lowerarmcirc,
            wrist,
            inseam,
            footlen,
            footwid,
        }
        try {
            await axios.post('/api/dolls/adddoll', data)
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
                        <h2 className="display-6 fw-bolder text-custom mb-4 text-center">Add New Doll</h2>
                        <form onSubmit={AddDollHandler}>
                            <div className="mb-3">
                                <label htmlFor="dollid" className="form-label">Doll ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="dollid"
                                    value={dollid}
                                    onChange={(e) => setDollID(e.target.value)}
                                    placeholder="Enter Doll ID"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="brand" className="form-label">Brand</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="brand"
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                    placeholder="Enter Brand"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="line" className="form-label">Line</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="line"
                                    value={line}
                                    onChange={(e) => setLine(e.target.value)}
                                    placeholder="Enter Line"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="type" className="form-label">Type</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="type"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    placeholder="Enter Type"
                                />
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="height" className="form-label">Height</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="height"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        placeholder="Enter Height"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="head" className="form-label">Head</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="head"
                                        value={head}
                                        onChange={(e) => setHead(e.target.value)}
                                        placeholder="Enter Head Size"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="neck" className="form-label">Neck</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="neck"
                                        value={neck}
                                        onChange={(e) => setNeck(e.target.value)}
                                        placeholder="Enter Neck Size"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="bust" className="form-label">Bust</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="bust"
                                        value={bust}
                                        onChange={(e) => setBust(e.target.value)}
                                        placeholder="Enter Bust Size"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="waist" className="form-label">Waist</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="waist"
                                        value={waist}
                                        onChange={(e) => setWaist(e.target.value)}
                                        placeholder="Enter Waist Size"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="hips" className="form-label">Hips</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="hips"
                                        value={hips}
                                        onChange={(e) => setHips(e.target.value)}
                                        placeholder="Enter Hips Size"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="thigh" className="form-label">Thigh</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="thigh"
                                        value={thigh}
                                        onChange={(e) => setThigh(e.target.value)}
                                        placeholder="Enter Thigh Size"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="calf" className="form-label">Calf</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="calf"
                                        value={calf}
                                        onChange={(e) => setCalf(e.target.value)}
                                        placeholder="Enter Calf Size"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="shoulders" className="form-label">Shoulders</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="shoulders"
                                        value={shoulders}
                                        onChange={(e) => setShoulders(e.target.value)}
                                        placeholder="Enter Shoulder Width"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="armlen" className="form-label">Arm Length</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="armlen"
                                        value={armlen}
                                        onChange={(e) => setArmlen(e.target.value)}
                                        placeholder="Enter Arm Length"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="upperarmcirc" className="form-label">Upper Arm</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="upperarmcirc"
                                        value={upperarmcirc}
                                        onChange={(e) => setUpperarmcirc(e.target.value)}
                                        placeholder="Enter Upper Arm Circumference"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lowerarmcirc" className="form-label">Lower Arm</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lowerarmcirc"
                                        value={lowerarmcirc}
                                        onChange={(e) => setLowerarmcirc(e.target.value)}
                                        placeholder="Enter Lower Arm Circumference"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="wrist" className="form-label">Wrist</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="wrist"
                                        value={wrist}
                                        onChange={(e) => setWrist(e.target.value)}
                                        placeholder="Enter Wrist Circumference"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="inseam" className="form-label">Inseam</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inseam"
                                        value={inseam}
                                        onChange={(e) => setInseam(e.target.value)}
                                        placeholder="Enter Inseam Length"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="footlen" className="form-label">Foot Length</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="footlen"
                                        value={footlen}
                                        onChange={(e) => setFootlen(e.target.value)}
                                        placeholder="Enter Foot Length"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="footwid" className="form-label">Foot Width</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="footwid"
                                        value={footwid}
                                        onChange={(e) => setFootwid(e.target.value)}
                                        placeholder="Enter Foot Width"
                                    />
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <button type="submit" className="btn btn-primary text-light">Add Doll</button>
                            </div>
                        </form>
                        {success && (
                            <div className="mt-3 alert alert-success" role="alert">
                                Doll added successfully!
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddDoll
