import React from 'react';

const Listing = (props) => {
    return(
        <div className = 'listingCard'>
            <div id = 'photo'>
                <img src = {props.photo} />
            </div>
            <div id = "prices">
                <p id = 'rrp'>{props.rrp}</p>
                <p id = 'price'>{props.price}</p>
                <p id = 'saving'>{props.saving}</p>
            </div>
            <p id = 'car'>{props.car}</p>
            <p id = 'description'>{props.description}</p>
            <p id = 'stock'>{props.stock}</p>
        </div>    
        )
}




export default Listing;







