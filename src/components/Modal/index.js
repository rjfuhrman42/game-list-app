import React from "react";
import "./modal.css";

class Modal extends React.Component {
    render() {
        if(!this.props.show)
        {
            return null
        }
      return (
            <div className="modal">
                {this.props.content}
                <button onClick={this.props.close}>Close</button>
            </div>
       )
    }
  }

  export default Modal