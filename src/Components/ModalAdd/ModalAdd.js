import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalAdd(props) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [posterUrl, setPosterUrl] = useState("")
  const [trailerSrc, setTrailerSrc] = useState("")
  const handelClick=()=>{
    props.onHide()
    props.add(title,description,posterUrl,trailerSrc)

  }
  return (
    <Modal
     {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Adding Movies
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Movie title"
          aria-label="Username"
          onChange={(e)=> setTitle(e.target.value) }
        />
      </InputGroup>
        <InputGroup>
          <Form.Control as="textarea" placeholder="Summary..." onChange={(e)=> setDescription(e.target.value)} />
        </InputGroup>
        <InputGroup className="my-3">
        <Form.Control id="basic-url" placeholder='Trailer Link' onChange={(e)=> setTrailerSrc(e.target.value)} />
      </InputGroup>
      <InputGroup className="my-3">
        <Form.Control id="basic-url" placeholder='Movie image' onChange={(e)=> setPosterUrl(e.target.value)} />
      </InputGroup>
      
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>handelClick()}>Add</Button>
    
      </Modal.Footer>
    </Modal>
  );
}
export default ModalAdd;
