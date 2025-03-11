import { useEffect, useState, useRef } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { getMovieDetails } from "@/services/api";
import css from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={css.details}>
      <Link to={backLinkRef.current} className={css.goBack}>
        ← Go back
      </Link>

      <h1 className={css.title}>{movie.title}</h1>
      <p className={css.overview}>{movie.overview}</p>
      <img
        className={css.img}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <nav className={css.nav}>
        <Link to="cast" className={css.link}>Cast</Link>
        <Link to="reviews" className={css.link}>Reviews</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
