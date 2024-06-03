import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import image from '../img/test.jpg'

//concatenates list of values for outfits with multiple sizes, patterns
const listSizes = (data, value) => {
  let array = []
      for (let i = 0; i < data.length; i++) {
        //console.log(data.length, data[i].patternid)
         if (i > 0){
          // eslint-disable-next-line no-empty
          if ((value === 'dollid') && (data[i][value] === data[i-1][value])){
            
            }
            else{ 
              array.push(data[i][value])
            }
          }
        else{ 
          array.push(data[i][value]);
        }
      };
    //array.splice(-1, 0, 'and ')
    let text = array.join(', ');
    return text
  } 


//create card of data
const OutfitCards = ({outfit}) => {
  return (
    <Card style={{ width: '18rem', margin: '5px' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>
      {outfit.name}
       </Card.Title>
       <Card.Text>
  
          From: {outfit.issueid} <br />
          Patterns: {listSizes(outfit.pattern, 'type')} <br />
          Sizes:  {listSizes(outfit.pattern, 'dollid')}<br />
                </Card.Text>
                
              <Link to={`/outfits/${outfit.outfitid}`}><Button>View Details</Button></Link>
              </Card.Body>
            </Card>)
}
  
export default OutfitCards

