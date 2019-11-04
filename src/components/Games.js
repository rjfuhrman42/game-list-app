import React, {Component} from "react"
import Game from './Game'
import mag_glass from '../images/white_mag.png'

class Games extends Component {
    constructor()
    {
        super()
        this.state = {
            results: []
        }
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    componentDidMount()
    {
        
    }

    handleKeyPress = (event) =>
    {
        if(event.key === 'Enter')
        {
            let search = document.getElementById('search')
            let term = search.value
    
            this.callBackendAPI(term)
            .then(response => {
                this.setState(
                    {
                        results: response.results
                    })
    
            })
        }
    }

    callBackendAPI = async (key_word) => {
        const response = await fetch(`/rawg/${key_word}`);
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message) 
        }
        return body;
    }
    


    render()
    {
        const test = this.state.results.map(result =>  <Game key={result.id} data={result}/>)

        if(this.state.results.length <= 0)
        {
            return (
                <div id="games">
                    <div id="search_bar">
                        <input type="text" id="search" onKeyPress={this.handleKeyPress} placeholder="search for a game..."/>
                    </div>
                </div>
            )
        }
        else return (
            <div id="games">
                <div id="search_bar">
                    <input type="text" id="search" onKeyPress={this.handleKeyPress} placeholder="search for a game..."/>
                </div>
                {/* <button id="search-button" onClick={this.handleClick}>Search!</button> */}
                <div id="games-list-container">
                    <ul id="games-list">{test}</ul>
                </div>
            </div>
        )
    }
}

export default Games