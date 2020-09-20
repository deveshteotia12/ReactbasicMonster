import React from "react";
import "./card.styles.css";
export const Card =(props)=>(
   <div className="card-container">
       <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set27size=200x200`}></img>
       <h2 key={props.monster.id}>{props.monster.name}</h2>
       <p key={props.monster.id}>{props.monster.email}</p>
   </div>
)