/* eslint-disable no-unused-vars */
import { useState } from "react";

const ThisIsButton = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Increment Me</button>
      <p>Count: {count}</p>
    </>
  );
};

const EventHandler = () => {
  // do js here

  const user = {
    id: "777",
    username: "Virtual Abishek",
  };
  const handleUserSignIn = () => {
    //do
  };

  const handleUserSignUp = () => {
    // do
  };

  const handleUserSignOut = () => {};

  return (
    <>
      <ThisIsButton />
      <hr />
    </>
  );
};

export default EventHandler;
