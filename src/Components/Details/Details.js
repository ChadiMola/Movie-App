import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function Details({data}) {
const {id}=useParams()
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
    <div className="d-flex flex-column mt-2 align-items-center">
      
      <Link to="/">
        <Button variant="light" className="m-1">Back</Button>
      </Link>
      <iframe className="rounded" src={data[id].trailerSrc} width="1000" height="500"></iframe>
    </div>
    </div>
  );
}

export default Details;
