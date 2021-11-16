import React from 'react'
import Card from './Card';
const Display = ({array,hit}) => {
    
   
    return (
        array.map((element)=>{
            //console.log('hello');
            return <Card ele={element} hit={hit}/>
                
        })
    )
   
}

export default Display
