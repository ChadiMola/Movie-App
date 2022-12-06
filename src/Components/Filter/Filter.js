import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { Rating } from "react-simple-star-rating";
import "./Filter.css";
function Filter({ setModalShow, setSort, search }) {
  return (
    <>
      <div className="container bgcolo p-2 rounded-pill sticky-top m-3 w-auto ">
        <div className="d-flex mx-5" style={{ height: "38px" }}>
          <div
            className="input-group me-auto bd-highlight "
            style={{ width: "300px" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Searsh"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={(e) => search(e.target.value)}
            />
          </div>
          <Dropdown className=" px-2">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSort(0)}>All</Dropdown.Item>
              <Dropdown.Item onClick={() => setSort(5)}>
                <Rating size={15} allowHover={false} initialValue={5} />
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSort(4)}>
                <Rating size={15} allowHover={false} initialValue={4} />
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSort(3)}>
                <Rating size={15} allowHover={false} initialValue={3} />
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSort(2)}>
                <Rating size={15} allowHover={false} initialValue={2} />
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSort(1)}>
                <Rating size={15} allowHover={false} initialValue={1} />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button
            style={{ width: "150px" }}
            className="px-2"
            variant="success"
            onClick={() => setModalShow(true)}
          >
            Add Movie
          </Button>
        </div>
      </div>
    </>
  );
}

export default Filter;
