import React from "react"

function SearchBar(props)
{
    return(
        <div id="search_bar">
            <input type="text" id="search" onKeyPress={props.handlePress} placeholder="search for a game..."/>
        </div>
    )
}

export default SearchBar