import React from "react"

function Game(props)
{
    //console.log(props.data)
    const {name, background_image, rating} = props.data

    return(
        <li>
            <span id="game-image-container">
                <img className="game-image" alt="game preview" src={background_image}></img>
                <h3>{name}</h3>
                {/* <p>{rating}/5</p> */}
            </span>
        </li>
    )
}

export default Game