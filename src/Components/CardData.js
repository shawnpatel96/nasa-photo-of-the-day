import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard"


function CardData() {
    const [nasaData, setNasaData]= useState([]);


    useEffect(()=>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=owXJS9WrS6qKn9GvJtFkgkvPQpfRArqJtzrsY2Ms")

        .then (res=>{
            console.log(res.data)   // This is showing my object
            setNasaData(res.data)
        })

        .catch(error=>{
            console.log('no data', error);
        })


    }, []);

    return (

        <div className="">
            
                    <NasaCard
                    key={nasaData.url}
                    title={nasaData.title}
                    explanation={nasaData.explanation}
                    copyright={nasaData.copyright}
                    data={nasaData.date}
                    Img={nasaData.url}
                    />
                
          
        </div>
    );
}
export default CardData;
