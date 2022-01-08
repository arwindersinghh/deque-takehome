import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const UnsplashModal = (props) => {    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Random picture from Unsplash API
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>          
          <div style={{ display:"flex", justifyContent:"center" }}><img style={{ height: "400px", width: "600px"}} src="https://source.unsplash.com/random" alt="unsplash-random" /></div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.hide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default UnsplashModal