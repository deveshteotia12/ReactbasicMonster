import React from "react";
import './card-list.styles.css'
import {Card} from "../card/card.component"
function Cardlist(props){
     
    return(
        <div className="card-list">
        {props.monsters.map((items)=>(<Card key={items.id} monster={items}></Card>))}
        </div>
    );
}


export default Cardlist;