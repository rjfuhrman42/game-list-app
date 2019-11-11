import React, {Component} from "react"
import ModalButton from "./Modal/ModalButton"

class ListItem extends Component
{
    constructor(props)
    {
        super()
        this.state = {
            image: props.data.image,
            name: props.data.name,
            rating: props.data.userRating,
            editing: false,
            active: false
        }

    }

    updateData = async (options) =>{

        let data = options.body
        let jsn = JSON.parse(data);
        console.log(jsn)
        const response = await fetch(`/api/${jsn.name}-${jsn.userRating}`, options)
        const data2 = await response.json();
        document.location.reload(true)  
        console.log(data2)
    }



    render()
    {
        const {name, editing, active, image, rating} = this.state
        //const isEditing = editing ? "list-item-editing" : "list-item"
        const isActive = active ? "list-item-active" : "list-item"
        const buttonText = editing ? "Save" : "Edit +"
        console.log(editing)
        return(
            <tr className={isActive}>
                    {/* <td className="image-col">
                        <img className="table-image" alt="game preview" src={image}></img>
                    </td> */}
                    <td>
                        <h4 onClick={() => this.setState({active: !this.state.active})}>{name}</h4>
                        <ModalButton does="edit" onSubmit={this.updateData} data={this.state}/>
                    </td>
                    <td>
                        <p>{rating}</p>
                    </td>
                    {/* <a href="https://rawg.io" className="image-attribution">RAWG.io</a> */}
            </tr>
        )
    }
}

export default ListItem