import React from 'react';
import styled from "styled-components"


const Card = styled.div`
width:50%;
margin-left:48%;
font-family: Georgia, serif;
font-size: 19px;
letter-spacing: 2px;
word-spacing: 2px;
color: white;
font-weight: normal;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: none;
border: 5px outset #1C6EA4;
border-radius: 40px 40px 40px 40px;
`;

const CardImage =styled.img`
width:75%;
  -webkit-box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0); 
  box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0);
`;





const NasaCard = props =>{

    return (
        <Card key={props.url}>
            <h2>{props.title}</h2>
            <CardImage src={props.Img} alt='its an image ok' className="img"></CardImage>
            <p>{props.explanation}</p>
           
            <div className="">
            <p>Author: {props.copyright}</p>
            <p>{props.date}</p>
            </div>
        </Card>
    );
};
export default NasaCard;