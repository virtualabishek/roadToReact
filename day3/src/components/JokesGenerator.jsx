import React, { Children, useState } from "react";
import "../styles/JokesStyle.scss";

const JokesGenerator = () => {
  const [joke, setJoke] = useState("");
  const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single").then(
      (res) => res.json().then((data) => setJoke(data.joke))
    );
  };

  return (
    <div>
      <h1>Joke Generator Using React and Joke API</h1>
      <Button callApi={fetchApi} />
      <p>{joke}</p>
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.callApi}>Click to generate a joke.</button>;
};

export default JokesGenerator;
