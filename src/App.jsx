import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ErrorMessage, setErrorMessage] = useState(null);
  const [movieList, setmovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  useDebounce(() => {setDebouncedSearchTerm(searchTerm), 500,[searchTerm]})

  const fetchMovies = async (query = "") => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Something went wrong while fetching the data");
      }
      const data = await response.json();
      if (data.Response === "False") {
        setErrorMessage(
          data.Error || "Something went wrong while fetching the data"
        );
        setmovieList([]);
        return;
      }
      setmovieList(data.results || []);
    } catch (error) {
      console.error(`Error Fetching Movies: ${error}`);
      setErrorMessage(`error Fetching Movies: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper ">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="all-movies mt-24">
          <h2>All Movies</h2>

          {isLoading ? (
            <Spinner />
          ) : ErrorMessage ? (
            <p className="text-red-500">{ErrorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
