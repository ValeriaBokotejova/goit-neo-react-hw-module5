import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li className={css.item} key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            {movie.title}
            {movie.poster_path && (
              <img
                className={css.poster}
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
