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
        {props.does}
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}

        onSubmit={(data) => {
                            setModalShow(false)
                            changeState(data)    
                            const options = {
                            method: 'POST',
                            headers: {
                                    'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(props.data)
                        }
                        props.onSubmit(options)
}}
        data={props.data}
      />
    </ButtonToolbar>
  );
}

export default ModalButton
