import concatenateDollInfo from "./concatenateDollInfo"

 const filterDolls = (dolls, searchTerm) => {
  return dolls.filter(doll => {
    const concatenated = concatenateDollInfo(doll).toLowerCase()
    return (
      concatenated.includes(searchTerm.toLowerCase()) ||
      doll.dollid.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })
}

export default filterDolls