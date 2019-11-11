import React, {Component} from "react"
import SearchBar from './SearchBar'
import GamesList from './GamesList'

class Games extends Component {
    constructor()
    {
        super()
        this.state = {
            results: [],
            list: [],
            currPage: "search"
        }

        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount()
    {
        console.log('mounted!')
        const response = this.loadData()
        .then(response => {
            this.setState({list: response})
        })
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

    handleClick()
    {
        if(this.state.currPage === "search")
        {   
            console.log('mounted!')
            const data = this.loadData()
            .then(data => {
                this.setState({list: data,
                            currPage: "list"})
            })
        }
        else this.setState({currPage: "search"})
    }

    callBackendAPI = async (key_word) => {
        const response = await fetch(`/rawg/${key_word}`);
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message) 
        }
        return body;
    }

    loadData = async () => {
        const response = await  fetch('/api');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message) 
        }
        return body;
    }


    render()
    {  
        const {currPage, results, list} = this.state

        if(currPage === "list")
        {
            return(
                <div id="games">
                    <button className="list-button" onClick={this.handleClick}>Search for games</button><br></br>
                    <GamesList type={currPage} data={list}/>
                </div>
            )
        }
        else{     
            if(this.state.results.length <= 0)
            {
                return (
                    <div id="games">
                        <button className="list-button" onClick={this.handleClick}>View my list!</button>
                        <SearchBar handlePress={this.handleKeyPress}/>
                    </div>
                )
            }
            else return (
                    <div id="games">
                        <button className="list-button" onClick={this.handleClick}>View my list!</button>
                        <SearchBar handlePress={this.handleKeyPress}/>
                        <GamesList type={currPage} data={results}/>
                    </div>
            )
        }
    }
}

export default Games