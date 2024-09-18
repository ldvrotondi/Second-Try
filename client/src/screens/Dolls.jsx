import React, { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import DollSearch from '../components/DollSearch'
import filteredData from "../utils/filteredData"
import { dollKeys } from "../utils/searchKeys"

const ViewDolls = () => {
    const [dolls, setDolls] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredDolls, setFilteredDolls] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getDollData = async () => {
            const { data } = await axios.get('api/dolls')
            setDolls(data)
        }
        getDollData()
    }, [])

    const handleSearch = (e) => {
        const value = e.target.value
        setSearchTerm(value)

        if (value) {
            const results = filteredData(dolls, dollKeys, value)
            setFilteredDolls(results)
        } else {
            setFilteredDolls([])
        }
    }

    const handleSelectDoll = (doll) => {
        navigate(`${doll.dollid}`)
    }

    return (
      <div className="container px-5 my-3 text-custom bg-transparent-white">
        <div className="text-center">
          <h2 className="display-6 fw-bolder mb-4">View Doll Data</h2>
          </div>
            <div className="mb-4">
                <DollSearch
                    value={searchTerm}
                    onChange={handleSearch}
                    results={filteredDolls}
                    onSelect={handleSelectDoll}
                />
            </div>
            
            </div>
    )
}

export default ViewDolls
