import React from 'react'

const Card = ({ele,hit}) => {
    const handlehit=(e,element)=>{
        e.preventDefault();
        console.log(element.id);
        hit(element.id);
    }
    //console.log('hello bro');
    //console.log(ele);
    return (
        <div className="card" onClick={(e)=>handlehit(e,ele)}>
            <img src={ele.img} />
            <p>{ele.name}</p>
        </div>
    )
}

export default Card
