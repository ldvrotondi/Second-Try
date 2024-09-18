
//single list of all pattern types within an outfit
const listPatterns = (data, value) => {
    let array = []
        for (let i = 0; i < data.length; i++) {
          let str = data[i][value]
          str = str.charAt(0).toUpperCase() + str.slice(1)
          if (!array.includes(str)){
          array.push(str)
          }
        };
      let text = array.join(', ')
      return text
    } 
  
export default listPatterns  