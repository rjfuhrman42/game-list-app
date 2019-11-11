import React from "react"
import Game from "./Game"
import ListItem from "./ListItem";

function GamesList (props)
{   
    let games;

    if(props.type === "search")
    {
        games = props.data.map(result =>  <Game key={result.id} data={result}/>) // search item
        
        return(
            <div id="games-list-container">
                <ul id="games-list">{games}</ul>
            </div>
        )
    } 
    else if(props.type === "list")
    {
        games = props.data.map(item =>  <ListItem key={item._id} edit={props.edit} data={item}/>)  // list item
         return(
            <table id="games-list-table">
                <thead>
                    <tr>
                        {/* <th colSpan="1" >Image</th> */}
                        <th colSpan="1">Title</th>
                        <th colSpan="1">Rating</th>
                    </tr>
                </thead>
                <tbody id="games-list">
                    {games}
                </tbody>
            </table>
        )
    }
}

export default GamesList