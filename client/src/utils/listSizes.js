import { Link } from "react-router-dom";

//sizes that an outfit has patterns for
const listSizes = (data, linkType) => {
    let array = [];
    for (let i = 0; i < data.length; i++) {
      let dollexists = data[i].doll;
      //if doll size not in library, just return a formatted string of the ID
      //still links to a page that shows all relevant patterns, but doll card is not formatted
      if (!dollexists) {
        let str = data[i].dollid;
        str = str.charAt(0).toUpperCase() + str.slice(1);
        if (!array.find(item => item.key === str)) {
          array.push(
            <Link to={`/dolls/${data[i].dollid}`} key={str} className={linkType}>
              {str}
            </Link>
          );
        }
      } else {
        //formats full name of doll and links to each doll's page
        let brand = data[i].doll.brand;
        let line = data[i].doll.line;
        let type = data[i].doll.type;
        let result = [brand, line, type].filter(Boolean).join(" ");
        if (!array.find(item => item.key === result)) {
          array.push(
            <Link to={`/dolls/${data[i].dollid}`} key={result} className={linkType}>
              {result}
            </Link>
          );
        }
      }
    }
    return array.reduce((prev, curr) => [prev, ', ', curr]);
  }

  export default listSizes