import React, {Component} from "react"

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


    render()
    {
        const {name, editing, active, image, rating} = this.state
        //const isEditing = editing ? "list-item-editing" : "list-item"
        const isActive = active ? "list-item-active" : "list-item"
        const buttonText = editing ? "Save" : "Edit +"

        console.log(editing)
        return(
            <li className={isActive}>
                <button className="edit-button" onClick={() => this.setState({editing: !this.state.editing})}>{buttonText}</button>
                <h4 onClick={() => this.setState({active: !this.state.active})}>{name}</h4>
                <p>Rating: {rating}/5</p>
                {/* <a href="https://rawg.io" className="image-attribution">RAWG.io</a> */}
            </li>
        )
    }
}

export default ListItem