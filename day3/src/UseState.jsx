import { useState } from "react";

const PassingStateAsAProps = () => {
  const [searchItem, setSearchItem] = useState("");
  const handleChange = (e) => {
    setSearchItem(e.target.value);
    console.log("you will print multiple times, cause state, multi renders.");
  };
  return (
    <>
      <div>
        <label htmlFor="search">Search: </label>
        <input type="text" id="search" onChange={handleChange} />
        <p>
          Searcing for <strong>{searchItem}</strong>
        </p>
      </div>
    </>
  );
};

const UseState = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org",
      author: ", Jordan Walke ",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://reduxjs.org/",
      author: ", Dan Abramov, Andrew Clark ",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const handleSearch = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div></div>
      {/* Callback Handlers in JSX.*/}
      <PassingStateAsAProps onSearch={handleSearch} />
      <hr />
    </>
  );
};

export default UseState;
