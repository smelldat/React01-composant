import React from "react";

const Travels = props => (
    <figure>
        <img src={props.image} alt={props.destination} />
        <figcaption>
            <p>{props.destination}</p>
            <blockquote>{props.country}</blockquote>
            <cite>{props.distance}</cite>
        </figcaption>
    </figure>
);

export default Travels;