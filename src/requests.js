const API_KEY = "0862e6e9c766fdafef9f9fb69d0a8e04";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_geners=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_geners=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_geners=99`,
};

export default requests;
