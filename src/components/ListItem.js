import React, {Component} from "react"

class ListItem extends Component
{
    constructor(props)
    {
        super()
        this.state = {
            image: props.data.image,
            name: props.data.name,
        }
    }

    render()
    {
        const {image, name} = this.state
        return(
            <li className="list-item">
                <img className="game-image" alt="game preview" src={image}></img>
                {/* <button className="w3-button" onClick={this.handleClick}>{inList}</button> */}
                <h4>{name}</h4>
                {/* <p>{rating}/5</p> */}
                {/* <a href="https://rawg.io" className="image-attribution">RAWG.io</a> */}
            </li>
        )
    }
}

export default ListItem