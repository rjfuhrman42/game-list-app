import React from "react"
import Game from "./Game"

function GamesList (props)
{
    const test = props.data.map(result =>  <Game key={result.id} data={result}/>)

    return(
        <div id="games-list-container">
            <ul id="games-list">{test}</ul>
        </div>
    )
}

export default GamesList