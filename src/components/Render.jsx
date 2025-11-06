import { useEffect, useState } from "react";

export const Render = () => {

      const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);


  // Fetch movies (random list on load)
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const searchTerms = [
        "batman",
      "spider-man",
      "avengers",
      "home alone",
      "joker",
      "mission impossible",
      "minions",
      "harry potter",
      "star wars",
      "frozen"
      
    ];
    try {
      let allMovies = [];

      // Pick 3 random search terms
      const randomTerms = [];
      while (randomTerms.length < 6) {
        const term = searchTerms[Math.floor(Math.random() * searchTerms.length)];
        if (!randomTerms.includes(term)) randomTerms.push(term);
      }

      // Fetch movies for each term
      for (let term of randomTerms) {
        const res = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(term)}&apikey=80515a25`);
        const data = await res.json();
        if (data.Search) allMovies = allMovies.concat(data.Search);
      }

      // Remove duplicates by imdbID
      const uniqueMovies = Array.from(new Map(allMovies.map(m => [m.imdbID, m])).values());

      // Shuffle and pick 9 movies
      const shuffled = uniqueMovies.sort(() => 0.5 - Math.random());
      setMovies(shuffled.slice(0, 9));
    } catch (err) {
      console.error(err);
      setMovies([]);
    }
    setLoading(false);
  };

    fetchMovies();
  }, []);

  return (
{movies, loading}
  )

};


