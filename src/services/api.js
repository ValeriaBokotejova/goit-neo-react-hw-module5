import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWMyNTNhYWYxMGE1YTVjNTZjMjFkNjk3ZGY0MzA5NyIsIm5iZiI6MTc0MTUzMjUxMC4wNjcwMDAyLCJzdWIiOiI2N2NkYWQ1ZWZmMWE4NDBiOTkxMGU3OGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3Bb_0fixRYcH5QkfZ4ciJCxKuNucYzKIgPRXBTegyJ4";

const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export async function getTrendingMovies() {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return response.data.results;
}

export async function searchMovies(query) {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${query}`,
    options
  );
  return response.data.results;
}

export async function getMovieDetails(movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, options);
  return response.data;
}

export async function getMovieCast(movieId) {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits`,
    options
  );
  return response.data.cast;
}

export async function getMovieReviews(movieId) {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews`,
    options
  );
  return response.data.results;
}
