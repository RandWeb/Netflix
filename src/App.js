import "./App.css";
import Row from "./Row";
import requests from "./requests";
function App() {
  return (
    <div className="App">
      <h1>Hey Guys Programmer! Let's build Netflix Clone Front-End</h1>
      <Row title="NetFlix Originals" fetchUrl={requests.fetchNetflixOriginal} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Actions Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
