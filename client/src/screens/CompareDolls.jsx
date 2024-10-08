import React, { useState, useEffect } from "react"
import axios from 'axios'
import filterDolls from "../utils/filterDolls"
import DollSearch from "../components/DollSearch"
import DollTable from "../components/DollTable"
import { Link } from "react-router-dom"

const CompareDolls = () => {
  const [dolls, setDolls] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredDolls, setFilteredDolls] = useState([])
  const [selectedDolls, setSelectedDolls] = useState([])

  useEffect(() => {
    const fetchDolls = async () => {
      const { data } = await axios.get('api/dolls')
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
    setSelectedDolls((prevSelectedDolls) => {
      if (!prevSelectedDolls.some(selected => selected.dollid === doll.dollid)) {
        return [...prevSelectedDolls, doll]
      }
      return prevSelectedDolls
    })
    setSearchTerm('')
    setFilteredDolls([])
  }

  const handleRemoveDoll = (dollid) => {
    setSelectedDolls((prevSelectedDolls) =>
      prevSelectedDolls.filter((doll) => doll.dollid !== dollid)
    )
  }

  return (
    <div className="container px-5 my-3 text-custom">
      <div className="text-center bg-transparent-white">
        <h2 className="display-6 fw-bolder mb-3">Compare Dolls</h2>
        <div className="text-center my-2 mx-5 fs-6 text-dark">
          <p>
            Enter the name, brand, or type of a doll in the search bar to view its data. Once you’ve selected a doll, you can search for additional dolls to add them to the table.
          </p>
          <p>
            You can remove any dolls from the results if you no longer wish to see them.
          </p>
          <p>
            If you would like to see all sizes similar to a specific doll, try the <Link to="/findsimilar">Find Similar</Link> page.
          </p>
        </div>

        <div className="mb-4">
        <DollSearch
                    value={searchTerm}
                    onChange={handleSearch}
                    results={filteredDolls}
                    onSelect={handleSelectDoll}
                />
        </div>

        {selectedDolls.length > 0 && (
          <div className="mt-4">
            <DollTable dolls={selectedDolls} onRemoveDoll={handleRemoveDoll} />
          </div>
        )}
      </div>
    </div>
  )
}

export default CompareDolls
