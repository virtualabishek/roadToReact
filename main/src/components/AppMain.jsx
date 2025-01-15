import React, { useState } from "react";

const AppMain = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) => {
    return story.title.includes(searchTerm);
  });

  return (
    <div>
      <h1 className="text-3xl text-center">My Hacker Stories</h1>

      <Search onSearch={handleSearch} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
};

const Search = (props) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        className="border-2 border-blue-600 bg-blue-300 text-pink-950"
        id="search"
        type="text"
        onChange={props.onSearch}
      />
    </div>
  );
};

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);

export default AppMain;
