import { Outfit, Pattern } from '../../../models'
import Card from '@mui/material/Card';

//code works, issue with sequelize

//make variable name more manageable
const OutfitList = Outfit.findAll({
  include: [{
    model: Pattern,
    as: 'patterns'
  }]
})
.then(outfits => {
  // Manipulate the result to match the desired format
   outfits.map(outfit => {
    return {
      outfitid: outfit.outfitid,
      name: outfit.name,
      issueid: outfit.issueid,
      designer: outfit.designer,
      patterns: outfit.patterns.map(patterns => {
        return {
          pattern: patterns.patternid,
          dollid: patterns.dollid,
          type: patterns.type
        };
      })
    };
  });
  
})
.catch(error => {
  console.error('Error fetching patterns:', error);
});

const outfits = OutfitList

//concatenates list of values for outfits with multiple sizes, patterns
function listSizes (data, value) {
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
export default function OutfitCards({props}) {
  const listOutfits = outfits.map(outfit =>
      <Card key={outfit.outfitid} sx={{ maxWidth: 275 }}>
        <p>
          {`Name: ${outfit.name}`}
          {`Source: ${outfit.issueid}`} 
          {`Patterns: ${listSizes(outfit.patterns, 'type')}`}
          {`Size:  ${listSizes(outfit.patterns, 'dollid')}`}
        </p>
      </Card>
      
    );
    return (
      <>
        <h1>Outfits</h1>
        <ul>{listOutfits}</ul>
      </>
    );
  }
  


  /*<CardMedia
        sx={{ height: 140 }}
        image="../src/images/test.jpg"
        title="placeholder"
         />*/