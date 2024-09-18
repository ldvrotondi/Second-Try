const filterByRange = (dolls, doll, measurementRanges) =>
    dolls.filter(otherDoll =>
      otherDoll.dollid !== doll.dollid &&
      otherDoll.height >= measurementRanges.height.min &&
      otherDoll.height <= measurementRanges.height.max &&
      otherDoll.bust >= measurementRanges.bust.min &&
      otherDoll.bust <= measurementRanges.bust.max &&
      otherDoll.waist >= measurementRanges.waist.min &&
      otherDoll.waist <= measurementRanges.waist.max &&
      otherDoll.hips >= measurementRanges.hips.min &&
      otherDoll.hips <= measurementRanges.hips.max
    )

    export default filterByRange