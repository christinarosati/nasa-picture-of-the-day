import React, { useState } from "react";
import axios from "axios";

export default function PictureOfTheDay() {
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
    setLoaded(true);
  }

  function handleClick(event) {
    let apiKey = "DVhrO5OaJqd6Etlwgh6U5lE0RfUMykBXhb2V37av";
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="PictureOfTheDay">
        <h2>{results.date}</h2>
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
