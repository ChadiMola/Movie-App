import MovieCard from "../MovieCard/MovieCard";

function MovieList({ data, changeRate,remove }) {
  return (
    <>
      <div className="row row-cols-1 row-cols-lg-1 justify-content-md-center g-4">
        {data.map((el) => (
          <MovieCard  key={el.id} el={el} changeRate={changeRate} remove={remove} />
        ))}
      </div>
    </>
  );
}

export default MovieList;
