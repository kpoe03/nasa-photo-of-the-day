import React, { useState, useEffect } from "react";
import axios from "axios";

function Card() {
  const [state, setState] = useState();

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        console.log(response);
        setState(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!state) {
    return <h2>Loading...</h2>;
  } else if (state.url.includes("jpg")) {
    return (
      <div>
        <img className="image" src={state.url} alt="Nasa"></img>
        <h2>{state.title}</h2>
        <p>{state.explanation}</p>
        <h3>{state.copyright}</h3>
      </div>
    );
  } else
    return (
      <div>
        <iframe className="image" src={state.url} alt="Nasa image"></iframe>
        <h2>{state.title}</h2>
        <p>{state.explanation}</p>
        <h3>{state.copyright}</h3>
      </div>
    );
}

export default Card;