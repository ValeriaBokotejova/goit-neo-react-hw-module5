import { useEffect, useState } from "react";
import { getTrendingMovies } from "@/services/api";
import MovieList from "@/components/MovieList/MovieList";
import css from "./HomePage.module.css"

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
