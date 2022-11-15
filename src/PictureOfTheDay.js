import React, { useState } from "react";
import axios from "axios";
import "./PictureOfTheDay.css";

export default function PictureOfTheDay() {
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
    setLoaded(true);
  }

  function handleClick(event) {
    event.preventDefault();
    let apiKey = "DVhrO5OaJqd6Etlwgh6U5lE0RfUMykBXhb2V37av";
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="PictureOfTheDay">
        <p className="date">{results.date}</p>
        <p className="title">{results.title}</p>
        <img src={results.url} alt={results.title} />
        <p className="copyright">
          Image Credit & Copyright: {results.copyright}
        </p>
        <p className="explanation">{results.explanation}</p>
        <small>Open-sourced code by Christina Rosati</small>
      </div>
    );
  } else {
    return (
      <div className="PictureOfTheDay">
        <button onClick={handleClick}>
          Click here to discover the picture of the day!
        </button>
      </div>
    );
  }
}
