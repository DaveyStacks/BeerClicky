import React from "react";
import "./Character.css"

const Character = (props) => {
    return (
        <div onClick={() => props.clicky(props.id)} className="beerCard">
            <img className="beerImage" alt={props.name} src={props.photo} />
        </div>
    )

}

export default Character;