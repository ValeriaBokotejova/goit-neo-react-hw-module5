import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;
    searchMovies(query).then(setMovies);
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const newQuery = form.elements.query.value.trim();
    if (!newQuery) return;
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <h1 className={css.title}>Search Movies</h1>
      <form className={css.form} onSubmit={handleSearch}>
        <input
          className={css.input}
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Enter movie title..."
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
