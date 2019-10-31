import React, {Component} from "react"

class Games extends Component {
    constructor()
    {
        super()
        this.state = {
            results: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount()
    {

    }

    handleChange()
    {
        let search = document.getElementById('search')
        let term = search.value

        fetch(`https://api.rawg.io/api/games?search=${term}`,
        {
            headers : {
                'User-Agent': 'games-list-app / personal use project'
        }})
        .then(response => response.json())
        .then(response => {
            console.log(response.results)
            this.setState(
            {
                results: response.results
            })
        })
    }


    render()
    {
        const test = this.state.results.map(result => <li key={result.id}>{result.name}</li>)

        return (
            <div id="games">
                <input type="text" id="search" placeholder="search for a game..."/>
                <button onClick={this.handleChange}>Search!</button>
                <ul>{test}</ul>
            </div>
        )
    }
}

export default Games