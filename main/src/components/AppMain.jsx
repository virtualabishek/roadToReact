import { useState, useEffect } from "react";
import * as React from "react";

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
    {
      title: "Vue.js",
      url: "https://vuejs.org/",
      author: "Evan You",
      num_comments: 5,
      points: 7,
      objectID: 2,
    },
    {
      title: "Angular",
      url: "https://angular.io/",
      author: "Google",
      num_comments: 4,
      points: 6,
      objectID: 3,
    },
    {
      title: "Svelte",
      url: "https://svelte.dev/",
      author: "Rich Harris",
      num_comments: 8,
      points: 9,
      objectID: 4,
    },
    {
      title: "TypeScript",
      url: "https://www.typescriptlang.org/",
      author: "Microsoft",
      num_comments: 6,
      points: 8,
      objectID: 5,
    },
    {
      title: "Node.js",
      url: "https://nodejs.org/",
      author: "Ryan Dahl",
      num_comments: 9,
      points: 10,
      objectID: 6,
    },
    {
      title: "Next.js",
      url: "https://nextjs.org/",
      author: "Vercel",
      num_comments: 7,
      points: 9,
      objectID: 7,
    },
    {
      title: "Gatsby",
      url: "https://www.gatsbyjs.com/",
      author: "Kyle Mathews",
      num_comments: 3,
      points: 6,
      objectID: 8,
    },
    {
      title: "Tailwind CSS",
      url: "https://tailwindcss.com/",
      author: "Adam Wathan",
      num_comments: 10,
      points: 10,
      objectID: 9,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem("search") || "React"
  );

  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  searchTerm;

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-center text-2xl">My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <br />
      <hr />
      <br />
      <List list={searchedStories} />
    </div>
  );
};

const Search = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input
      className="bg-gray-400 border-2 border-yellow-500 text-pink-950"
      type="text"
      value={search}
      onChange={onSearch}
    />
  </div>
);

const List = ({ list }) => (
  <ul className="list-decimal">
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);
const Item = ({ item }) => (
  <li>
    <span className="cursor-pointer px-4">
      <a href={item.url}>{item.title}</a>,
    </span>
    <span className="text-green-600">{item.author},</span>
    <span className="text-blue-500">
      {" "}
      No. Of Comments: {item.num_comments},
    </span>
    <span className="text-yellow-400"> Points:{item.points}</span>
  </li>
);

export default AppMain;
