import React, { useEffect, useState } from "react";
import { Render } from "./Render";
import { Link } from "react-router-dom";

const Movies = ({ filteredMovies = [] }) => {
  const [sortMovies, setSortMovies] = useState([]);
  const { movies, loading } = Render();

  const displayMovies = filteredMovies.length > 0 ? filteredMovies : movies;

  function sortingMovies(sorting) {
    console.log(sorting);

    if (sorting === "LOW_TO_HIGH") {
      setSortMovies(movies.sort((a, b) => a.Year - b.Year));
    }
    if (sorting === "HIGH_TO_LOW") {
      setSortMovies(movies.sort((a, b) => b.Year - a.Year));
    }
    if (sorting === "A-Z") {
      setSortMovies(movies.sort((a, b) => a.Title.localeCompare(b.Title)));
    }
  }

  return (
    <div className="movies__container">
      <div className="filter__wrapper">
        <h3 className="movies__title">
          {filteredMovies.length > 0 ? "Search Results" : "Showing Movies"}
        </h3>

        <select
          id="filter"
          defaultValue="DEFAULT"
          onChange={(event) => sortingMovies(event.target.value)}
        >
          <option value="DEFAULT" disabled>
            Sort
          </option>
          <option value="LOW_TO_HIGH">Year Released, Low to High</option>
          <option value="HIGH_TO_LOW">Year Released, High to Low</option>
          <option value="A-Z">Title A to Z</option>
        </select>
      </div>
      {loading ? (
        <div className="movies__list">
          {[...Array(9)].map((_, index) => (
            <div className="movie" key={index}>
              <div className="movie__poster">
                <div className="movie__poster--skeleton"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="movies__list">
          {displayMovies.map((movie, index) => (
            <Link
              to={`/movies/${movie.imdbID}`}
              className="movie"
              key={`${movie.imdbID}-${index}`}
            >
              <div className="movie__poster">
                <img src={movie.Poster} alt={movie.Title} />
              </div>
              <div className="movie__info">
                <h3 className="movie__title">{movie.Title}</h3>
                <p>{movie.Year}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
