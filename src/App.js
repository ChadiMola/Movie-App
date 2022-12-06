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
  const changeRate = (id, e) => {
    setNewData([...newData, (newData[id].rating = e)].slice(0, newData.length));
  };
  const add =(title,description,posterUrl,trailerSrc)=>{
    setNewData([...newData,{id:newData.length,title,description,posterUrl,rating:0,trailerSrc}])
  }
  return (
    <>
      <div class="container rounded-3 bgblack py-1 my-3 "style={{width:"80%"}}>
        <Filter setModalShow={setModalShow} setSort={setSort} />

        <MovieList
          data={newData.filter((el) => (sort ? el.rating === sort : data))}
          changeRate={changeRate}
        />
        <ModalAdd show={modalShow}  add={add} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
}

export default App;
