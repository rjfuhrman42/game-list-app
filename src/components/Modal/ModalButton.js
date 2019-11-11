import React, {Component} from "react"
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

function ModalButton(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, changeState] = React.useState(props.data);

  return (
    <ButtonToolbar>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add to List +
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={(data) => {setModalShow(false)
                           changeState(data)
                          const options = {
                          method: 'POST',
                          headers: {
                                  'Content-Type': 'application/json'
                          },
                          body: JSON.stringify(props.data)
                      }
                      saveData(options)
}}
        data={props.data}
      />
    </ButtonToolbar>
  );
}

async function saveData(options){
    console.log(options.body)
    const response = await fetch('/api', options)
    const data = await response.json();
    console.log(data)
}


export default ModalButton
