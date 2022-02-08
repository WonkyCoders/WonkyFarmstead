import React from 'react';

function Produce(props){
    return(
        // Get region from tapped produce, match with onClick in grandparent component
        <div className = "produce" onClick={() => props.onClick(props.produce.region)}>
            <h3>{props.produce.foodType}</h3>
        </div>

    )
}

export default Produce;