const getMeasurementRanges = (doll) => {
    const height = parseFloat(doll.height)
    let minHeight, maxHeight
  
    if (height < 35) {
      maxHeight = height * 1.2
      minHeight = height * 0.8
    } else if (height < 55) {
      maxHeight = height * 1.14
      minHeight = height * 0.86
    } else {
      maxHeight = height * 1.1
      minHeight = height * 0.9
    }
  
    return {
      height: { min: minHeight, max: maxHeight },
      bust: { min: doll.bust * 0.85, max: doll.bust * 1.20 },
      waist: { min: doll.waist * 0.85, max: doll.waist * 1.5 },
      hips: { min: doll.hips * 0.85, max: doll.hips * 1.20 },
    }
  }

export default getMeasurementRanges