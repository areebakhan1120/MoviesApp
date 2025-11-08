import { useState } from "react";
import { Footer } from "./components/Footer";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesInfo from "./components/MoviesInfo";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle search
  const handleSearch = async (query) => {
    if (!query.trim()) {
      setFilteredMovies(); 
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${encodeURIComponent(
          query
        )}&apikey=80515a25`
      );
      const data = await res.json();

      setFilteredMovies(data.Search || []);
    } catch (err) {
      console.error(err);
      setFilteredMovies([]);
    }
    setLoading(false);
    setMovies ("")
  };

  return (
    <Router>
      <Nav onSearch={handleSearch} />
      <Routes>
        <Route
        path ="/"
          element={<Home />}
        />
        <Route
          path="/movies"
          element={
            <Movies
              movies={movies}
              filteredMovies={filteredMovies}
              loading={loading}
            />
          }
        />
        <Route path="/movies/:imdbID" element = {<MoviesInfo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
