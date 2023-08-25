const API_KEY = '667ac8a06a0ade436e210e2c58d2b80d';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchLatestMovies() {
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
  const data = await response.json();
//   return data.results;
const moviesWithPosters = data.results.map(movie => {
    movie.posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return movie;
  });

  return moviesWithPosters;
}

export async function fetchMovieReviews(movieId) {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=reviews`);
  const data = await response.json();

  data.posterUrl = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  data.backdrop = `https://image.tmdb.org/t/p/w500${data.backdrop_path}`;


  return data;
}