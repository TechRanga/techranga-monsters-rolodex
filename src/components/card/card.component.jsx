import React from 'react';
import './card.style.css';

export const Card = (props) =>{
    let imageSrc = "https://robohash.org/$"+props.monster.id+"?set=set2&size=180x180";
    return(
    <div className="card-container">
        <img alt="Monster" src={imageSrc}/>
        <h1>{props.monster.name}</h1>
        <p>{props.monster.email}</p>
    </div>
    );
}