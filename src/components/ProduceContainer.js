import React from "react";
import Produce from "./Produce"
import "../styles/Produce.css";

function ProduceContainer(props){
    return(
        <div className="producebox">
        <header className="producetitle">
            <h2>WHAT'S IN THE BOX THIS WEEKEND?</h2>
            </header>
        <div className = 'producelist'>
                {/* Make new list from array items for UI showing only produce name */}
                {props.produceList.map((produce) => 
                (<Produce key = {produce.id} produce={produce} onClick={props.onClick}/>))}
        </div>
        </div>

    )
}

export default ProduceContainer;