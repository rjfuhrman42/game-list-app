import React, {Component} from "react"
import ModalButton from "./Modal/ModalButton"

class Game extends Component
{

    constructor(props)
    {
        super(props);
        const {name, background_image, id} = this.props.data
        this.state = {
                name: name,
                image: background_image,
                inList: "+ add to list",
                key: id
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
        const {name, image, inList} = this.state
        return(
            <li className="game">
                    <img className="game-image" alt="game preview" src={image}></img>
                    {/* <button className="w3-button" onClick={this.handleClick}>{inList}</button> */}
                     <h4><a id="attribution"  target="_blank" href={'https://rawg.io/games/' + this.props.data.slug}>{name}</a></h4>
                     <ModalButton does={inList} onSubmit={this.saveData} data={this.state}/>
                    {/* <p>{rating}/5</p> */}
                    {/* <a href="https://rawg.io" className="image-attribution">RAWG.io</a> */}
            </li>
        )
    }
}




export default Game