import React from 'react';

const NasaCard = props =>{

    return (
        <div className="propsCard" key={props.url}>
            <h2>{props.title}</h2>
            <img src={props.Img} alt='its an image ok' className="img"></img>
            <p>{props.explanation}</p>
           
            <div className="">
            <p>Author: {props.copyright}</p>
            <p>{props.date}</p>
            </div>
        </div>
    );
};
export default NasaCard;