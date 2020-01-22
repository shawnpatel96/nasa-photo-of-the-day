import React from 'react';

const NasaCard = props =>{

    return (
        <div className="" key={props.url}>
            <h2>{props.title}</h2>
            <img src={props.Img} alt='its an image ok'></img>
            <p>{props.explanation}</p>
           
            <div className="">
            <p>{props.copyright}</p>
            <p>{props.date}</p>
            </div>
        </div>
    );
};
export default NasaCard;