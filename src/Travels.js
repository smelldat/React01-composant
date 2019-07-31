import React from "react";

const Travels = props => (
    <figure>
        <img style={{width:"500px"}} src={props.image} alt={props.destination} />
        <div>
            <p>{props.destination} - {props.country} - {props.distance}</p>
        </div>
    </figure>
);

export default Travels;