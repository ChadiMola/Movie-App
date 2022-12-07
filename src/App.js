import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data";
import MovieList from "./Components/MovieList/MovieList";
import Filter from "./Components/Filter/Filter";
import ModalAdd from "./Components/ModalAdd/ModalAdd";
import { useState } from "react";
function App() {
  const [modalShow, setModalShow] = useState(false);
  const [newData, setNewData] = useState(data);
  const [sort, setSort] = useState(0);
  const [search, setSearch] = useState("");
  const changeRate = (id, e) => {
    setNewData(newData.map((el) => (el.id !== id ? el : { ...el, rating: e })));
  };
  const remove = (e) => {
    setNewData(newData.filter((el) => el.id !== e));
  }
  const add = (title, description, posterUrl, trailerSrc) => {
    setNewData([
      ...newData,
      {
        id: newData.length,
        title,
        description,
        posterUrl,
        rating: 0,
        trailerSrc,
      },
    ]);
  };

  return (
    <>
      <div
        className="container rounded-3 bgblack py-1 my-3 "
        style={{ width: "80%" }}
      >
        <Filter
          setModalShow={setModalShow}
          setSort={setSort}
          search={setSearch}
        />

        <MovieList
          data={newData
            .filter((el) => (sort ? el.rating === sort : newData))
            .filter((el) =>
              search
                ? el.title
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase().trim())
                : newData
            )}
          changeRate={changeRate}
          remove={remove}
        />
        <ModalAdd
          show={modalShow}
          add={add}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}

export default App;
