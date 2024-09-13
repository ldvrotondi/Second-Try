const concatenateDollInfo = (doll) => {
    return [doll.brand, doll.line, doll.type]
      .filter((value) => value !== null && value !== undefined && value.trim() !== '')
      .join(' ');
  };

  export default concatenateDollInfo