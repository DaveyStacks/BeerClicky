import React from "react";
import "./Character.css"

const Character = (props) => {
    return (
        <div onClick={() => props.clicky(props.id)} className="beerCard">
            <a href="#">
                <img className="beerImage" alt={props.name} src={props.photo} />
            </a>


        </div>
    )

}

export default Character;