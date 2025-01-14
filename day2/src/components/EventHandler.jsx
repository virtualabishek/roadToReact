import { useState } from "react";

const EventHandler = () => {
  // do js here
  const handleClick = () => {
    setCount(count + 1);
  };

  const [count, setCount] = useState(0);

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
      {/* <button type="button" onClick={handleClick}>
        Increase Count
      </button>
      <p>Count: {count}</p> */}
      <input type="text" onChange={e} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default EventHandler;
