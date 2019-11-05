import React from "react"

function Game(props)
{
    //console.log(props.data)
    const {name, background_image, rating} = props.data

    return(
        <li>
            <span id="game-image-container">
                <img className="game-image" alt="game preview" src={background_image}></img>
                <h4>{name}</h4>
                {/* <p>{rating}/5</p> */}
                <button className="w3-button w3-xlarge w3-black">+ add to list</button>
            </span>
        </li>
    )
}

export default Game