import React, {Component} from "react"

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
        const test = this.state.results.map(result => <li key={result.id}>{result.name}</li>)

        return (
            <div id="games">
                <input type="text" id="search" onKeyPress={this.handleKeyPress} placeholder="search for a game..."/>
                {/* <button id="search-button" onClick={this.handleClick}>Search!</button> */}
                <ul id="games-list">{test}</ul>
            </div>
        )
    }
}

export default Games