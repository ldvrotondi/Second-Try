const getMeasurementRanges = (doll) => {
    const heightNumber = parseFloat(doll.height);
    let minHeight, maxHeight;
  
    if (heightNumber < 35) {
      maxHeight = heightNumber * 1.2;
      minHeight = heightNumber * 0.8;
    } else if (heightNumber < 55) {
      maxHeight = heightNumber * 1.14;
      minHeight = heightNumber * 0.86;
    } else {
      maxHeight = heightNumber * 1.07;
      minHeight = heightNumber * 0.93;
    }
  
    return {
      height: { min: minHeight, max: maxHeight },
      bust: { min: doll.bust * 0.87, max: doll.bust * 1.13 },
      waist: { min: doll.waist * 0.90, max: doll.waist * 1.10 },
      hips: { min: doll.hips * 0.90, max: doll.hips * 1.10 },
    };
  };

export default getMeasurementRanges