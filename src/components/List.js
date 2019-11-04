import React, {Component} from "react"

class List extends Component
{
    constructor()
    {
        super()
        this.state = {
            Games: []       // array of components
        }
    }

    render()
    {
        return (
            <ul></ul>
        )
    }
}

export default List