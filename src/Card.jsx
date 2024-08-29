import React from 'react';
import Images from './Images';


function Card(props){
    // console.log(props);
    return( <div className='card'>
        <Images imgsrc = {props.imgsrc} />
        <div className='card_info'>
            <span className='card_category'>{props.title}</span>
            <h3 className='card_name'>{props.sname}</h3>
            <a href={props.link} target='_blank' rel='noreferrer'><button>Watch Now</button></a>
        </div>
    </div>)
}


export default Card;