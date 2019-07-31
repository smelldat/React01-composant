import React from "react";
import Travels from "./Travels";
// src/Travel.js
const quotes = [
    {
        destination: "Zadar",
        country:"Croatie",
        image:"https://croatia.hr/sites/default/files/styles/image_full_width/public/beaches/01-ZADAR-Borik-DJI_0001_ACR-aleksandar-gospic.jpg?itok=5mqXeioS",
        distance:"Trop loin"
    },
    {
        destination:"Londres",
        country:"Angleterre",
        image:"https://img-4.linternaute.com/EJwrJtqS8UseZNofJUkmhg4FHd4=/660x366/smart/ba429abadd8a4731be516a2465ca749f/ccmcms-linternaute/10993851.jpg",
        distance:"Moins loin"
    },
    {
        destination:"Edimbourg",
        country:"Ecosse",
        image: "https://www.visitbritain.com/sites/default/files/styles/wysiwyg_image/public/consumer/france/ecosse/edimbourg/le_chateau_dedimbourg_cvisitscotland_-_kenny_lam.jpg?itok=7lH_lCpH",
        distance:"Pas très loin de l'Angleterre"
    },
    {
        destination:"Bayonne",
        country:"France",
        image:"https://france3-regions.francetvinfo.fr/nouvelle-aquitaine/sites/regions_france3/files/styles/top_big/public/assets/images/2018/06/01/64b_fetes_de_bayonne_mode_d_emploi-00_00_38_16_1-3687245.jpg?itok=rlxxw7tw",
        distance:"Pour y aller ça va, le retour est plus difficile"
    },
    {
        destination:"Marrakech",
        country:"Maroc",
        image:"https://www.voyageway.com/wp-content/uploads/2018/01/ou-dormir-a-marrakech-740x454.jpg",
        distance:"En avion c'est rapide !"
    }
];

const Quotes = () => (
    <div>
        {quotes.map(quote => (
                <Travels destination={quote.destination} country={quote.country} image={quote.image} distance={quote.distance}/>
            )
        )}
    </div>
);

export default Quotes;