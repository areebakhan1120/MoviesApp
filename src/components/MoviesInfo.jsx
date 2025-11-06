import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MoviesInfo = ({ movies }) => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?i=${imdbID}&apikey=80515a25`
        );
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchMovie();
  }, [imdbID]);

  if (loading) return <div className="loading">Loading movie...</div>;
  if (!movie) return <div className="error">Movie not found.</div>;

  return (
    <div id="movies__body">
      <main id="movies__main">
        <div className="movie__info--container">
          <div className="movie__row">
            <div className="movie__selected--top">
              <Link to="/movies" className="movie__link">
                <FontAwesomeIcon icon="arrow-left" className="arrow__left"/>
              </Link>
              <Link to="/movies" className="movie__link">
                <h2 className="movie__selected--title--top">Back to Movies</h2>
              </Link>
            </div>
            <div className="movie__selected">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="movie-detail__poster"
              />
          
            <div className="movie__selected--description">
              <h2 className="movie__selected--title">{movie.Title}</h2>
              <h3 className="movie__sub-title">Year:</h3>
              <p className="movie__selected--info">{movie.Year}</p>
              <h3 className="movie__sub-title">Genre:</h3>
              <p className="movie__selected--info">{movie.Genre}</p>
              <h3 className="movie__sub-title">Director:</h3>
              <p className="movie__selected--info">{movie.Director}</p>
              <h3 className="movie__sub-title">Starring:</h3>
              <p className="movie__selected--info">{movie.Actors}</p>
              <h3 className="movie__sub-title">Summary:</h3>
              <p className="movie__selected--info">{movie.Plot}</p>
            </div>
          </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default MoviesInfo;
