import React from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.data.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>What would you rate this game?</h4>
          <select id="user-rating">
            <option defaultValue={true} >-- Pick a rating --</option>
            <option value="5">5 Masterpiece</option>
            <option value="4">4 Great</option>
            <option value="3" >3 Good</option>
            <option value="2">2 Average</option>
            <option value="1">1 Bad</option>
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>
          {
            let element = document.getElementById("user-rating");
            let rating = element.options[element.selectedIndex].value;
            props.data.userRating = rating;
            props.onHide(props.data);
          }
          }>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }


  export default MyVerticallyCenteredModal