import React, {Component} from "react"

class Game extends Component
{

    constructor(props)
    {
        super(props);
        const {name, background_image, rating} = this.props.data
        this.state = {
                name: name,
                image: background_image,
                rating: rating,
                inList: "+ add to list"
        }
        this.handleClick = this.handleClick.bind(this)
    }
    

    handleClick()
    {
        const options = {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        this.saveData(options)

        this.setState({inList: "added"})
    }

    saveData = async (options) =>{
        console.log(options.body)
        const response = await fetch('/api', options)
        const data = await response.json();
        console.log(data)
    }

    render()
    {
        const {name, image, rating, inList} = this.state

        return(
            <li>
                    <img className="game-image" alt="game preview" src={image}></img>
                    <button className="w3-button" onClick={this.handleClick}>{inList}</button>
                     <h4>{name}</h4>
                    {/* <p>{rating}/5</p> */}
                    {/* <a href="https://rawg.io" className="image-attribution">RAWG.io</a> */}
            </li>
        )
    }
}




export default Game