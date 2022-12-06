import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { Rating } from "react-simple-star-rating";
import './Filter.css'
function Filter({ setModalShow, setSort }) {
  return (
    <>
      <div className="container bgcolo p-2 rounded-pill sticky-top m-3 w-auto ">
        <div className="row mx-5">
          <div
            class="input-group me-auto bd-highlight col-md-8"
            style={{ width: "300px" }}
          >
            <input
              type="text"
              class="form-control"
              placeholder="Searsh"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <Dropdown className="col-2 px-2">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSort(0)}>All</Dropdown.Item>
              <Dropdown.Item onClick={() => setSort(5)}>
                <Rating size={15} disableFillHover initialValue={5} />
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSort(4)}>
                <Rating size={15} disableFillHover initialValue={4} />
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSort(3)}>
                <Rating size={15} disableFillHover initialValue={3} />
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSort(2)}>
                <Rating size={15} disableFillHover initialValue={2} />
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSort(1)}>
                <Rating size={15} disableFillHover  initialValue={1} />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button
            className="col-2 px-2"
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
