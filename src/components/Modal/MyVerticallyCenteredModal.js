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
            <option value="10">10 Masterpiece</option>
            <option value="9">9 Great</option>
            <option value="8" >8 Very Good</option>
            <option value="7">7 Good</option>
            <option value="6">6 Fine</option>
            <option value="5">5 Average</option>
            <option value="4">4 Bad</option>
            <option value="3">3 Very Bad</option>
            <option value="2">2 Horrible</option>
            <option value="1">1 Appaling</option>
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>
          {
            let element = document.getElementById("user-rating");
            let rating = element.options[element.selectedIndex].value;
            props.data.userRating = rating;
            props.onSubmit(props.data);
          }
          }>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }


  export default MyVerticallyCenteredModal