import MovieCard from "../MovieCard/MovieCard";

function MovieList({ data, changeRate }) {
  return (
    <>
      <div class="row row-cols-1 row-cols-lg-1 justify-content-md-center g-4">
        {data.map((el) => (
          <MovieCard el={el} changeRate={changeRate} />
        ))}
      </div>
    </>
  );
}

export default MovieList;
