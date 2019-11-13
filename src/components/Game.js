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
    
    componentDidMount()
    {
        fetch(`/api/${this.state.name}`)                // call our database, check if this name is in our database
        .then(response => response.json())
        .then(response => {
            console.log(response.hasOwnProperty([0]))   
            if(response.hasOwnProperty([0]))         // If the array has SOMETHING,then by the way our database works this means that it exists in the list
                            {
                                this.setState({inList: "in list"})
                }
            });
    }

    handleClick()
    {
        console.log("worked!")
        this.setState({inList: "added!"})
        const options = {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        this.saveData(options)

    }


    saveData = async (options) =>{
        console.log("savedata!")
        this.setState({inList: "added"})
        let data = options.body
        let jsn = JSON.parse(data);
        console.log(jsn)
        const response = await fetch(`/api/${jsn.name}`, options)
        const data2 = await response.json();
        console.log(data2)
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