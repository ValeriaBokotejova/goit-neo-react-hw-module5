import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "@/services/api";
import css from "./MovieCast.module.css";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul className={css.list}>
      {cast.map((actor) => (
        <li className={css.link} key={actor.id}>
          <img className={css.img} src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
          <p className={css.name}>{actor.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
