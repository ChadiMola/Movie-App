import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function ModalAdd(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [trailerSrc, setTrailerSrc] = useState("");
  const navigation=useNavigate()
  const handelClick = () => {
    props.add(title, description, posterUrl, trailerSrc);
    navigation('/')
  };
  return (

    <div className="position-absolute top-50 start-50 translate-middle" style={{width:"500px"}}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Movie title"
          aria-label="Username"
          onChange={(e) => setTitle(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <Form.Control
          as="textarea"
          placeholder="Summary..."
          onChange={(e) => setDescription(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="my-3">
        <Form.Control
          id="basic-url"
          placeholder="Trailer Link"
          onChange={(e) => setTrailerSrc(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="my-3">
        <Form.Control
          id="basic-url"
          placeholder="Movie image"
          onChange={(e) => setPosterUrl(e.target.value)}
        />
      </InputGroup>
      <Button variant="success" onClick={() => handelClick()}>Add</Button>
      <Button variant="light" className="mx-2" onClick={() => navigation('/') }>Back</Button>

    </div>
  );
}
export default ModalAdd;
