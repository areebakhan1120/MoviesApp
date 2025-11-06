
import React, { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import OverlayImg from "../assets/desktop-wallpaper-kodi-posted-by-sarah-walker.jpg";
import { useNavigate } from "react-router-dom";


const Overlay = ({onSearch})=> {
const [searchId, setSearchId] = useState("")
const navigate = useNavigate()

  const debouncedSearch = useCallback(
    debounce((query) => {
      if (query.trim() !== "") {
        onSearch(query);
        navigate("/movies");
      }
    }, 500), // 500ms delay
    []
  );

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchId(value);
    debouncedSearch(value);
  };

const handleSubmit = (event) =>{
    event.preventDefault()
    if(searchId.trim() !== "") {
        onSearch(searchId)
        setSearchId("")
            navigate("/movies");    
    }
}


  return (
    <>
      <div className="overlay">
        <img src={OverlayImg} className="overlay__img" alt="Background" />
      </div>

      <div className="search">
        <h1>Explore The Guide</h1>
        <form className="input__wrapper" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Find Your Flix"
            value={searchId}
            onChange={handleChange}
            id="search__input"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search__icon" />
        </form>
      </div>
    </>
  );
};

export default Overlay;

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
