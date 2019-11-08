import React from "react"
import Game from "./Game"
import ListItem from "./ListItem";

function GamesList (props)
{   
    let games;

    if(props.type === "search")
    {
        games = props.data.map(result =>  <Game key={result.id} data={result}/>) // search item
    } 
    else if(props.type === "list")
    {
        games = props.data.map(item =>  <ListItem key={item._id} edit={props.edit} data={item}/>)  // list item
    }

    return(
        <div id="games-list-container">
            <ul id="games-list">{games}</ul>
        </div>
    )
}

export default GamesList