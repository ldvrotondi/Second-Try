

//formats doll measurements for easier radability 
 const formatMeasurements = (measurement) => {
    if (!measurement || measurement == 0) {
      return '---'
    } else {
      measurement = measurement.toString()
      if (measurement.includes('.')) {
        return measurement
      } else {
        return measurement + '.0'
      }
    }
  }

  export default formatMeasurements