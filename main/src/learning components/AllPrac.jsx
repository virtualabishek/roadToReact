/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from "react";

const AllPrac = () => {
  const initialStories = [
    {
      title: "Fireship",
      url: "https://www.youtube.com/@Fireship",
      author: "Jeff Delaney",
      num_comments: 2500,
      points: 98,
      objectID: 0,
    },
    {
      title: "Microsoft Excel",
      url: "https://www.microsoft.com/excel",
      author: "Microsoft Corporation",
      num_comments: 1850,
      points: 92,
      objectID: 1,
    },
    {
      title: "ChatGPT",
      url: "https://chat.openai.com",
      author: "OpenAI",
      num_comments: 3200,
      points: 96,
      objectID: 2,
    },
    {
      title: "Traversy Media",
      url: "https://www.youtube.com/@TraversyMedia",
      author: "Brad Traversy",
      num_comments: 1900,
      points: 94,
      objectID: 3,
    },
    {
      title: "Google Docs",
      url: "https://docs.google.com",
      author: "Google",
      num_comments: 1600,
      points: 88,
      objectID: 4,
    },
    {
      title: "Claude",
      url: "https://claude.ai",
      author: "Anthropic",
      num_comments: 2800,
      points: 95,
      objectID: 5,
    },
    {
      title: "Net Ninja",
      url: "https://www.youtube.com/@NetNinja",
      author: "Shaun Pelling",
      num_comments: 1700,
      points: 91,
      objectID: 6,
    },
    {
      title: "LibreOffice",
      url: "https://www.libreoffice.org",
      author: "The Document Foundation",
      num_comments: 1200,
      points: 85,
      objectID: 7,
    },
    {
      title: "Programming with Mosh",
      url: "https://www.youtube.com/@programmingwithmosh",
      author: "Mosh Hamedani",
      num_comments: 2100,
      points: 93,
      objectID: 8,
    },
    {
      title: "Bard",
      url: "https://bard.google.com",
      author: "Google",
      num_comments: 2400,
      points: 90,
      objectID: 9,
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [stories, setStories] = useState(initialStories);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const searchStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // console.log(searchTerm);
  return (
    <>
      <div>
        <h1>Search Top Tech</h1>
        <InputBox onInputChange={handleSearch} value={searchTerm}>
          Search:{" "}
        </InputBox>
      </div>
      <div>
        <ListData list={searchStories} />
      </div>
    </>
  );
};

const InputBox = ({ children, onInputChange, value }) => {
  return (
    <div>
      <label htmlFor="">{children}</label>
      <input
        type="text"
        className="bg-brown-400 border-2 border-yellow-400"
        onChange={onInputChange}
        value={value}
      />
    </div>
  );
};

const ListData = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((item) => (
          <ItemList key={item.objectID} item={item} />
        ))}
      </ul>
    </div>
  );
};

const ItemList = ({ item }) => {
  return (
    <li>
      <span className="cursor-pointer hover:text-blue-800">
        <a href={item.url}>{item.title}</a>,
      </span>
      <span className="text-emerald-800">{item.author},</span>
      <span className="text-yellow-900">
        {" "}
        No. Of Comments: {item.num_comments},
      </span>
      <span className="text-blue-700">Points: {item.points}</span>
    </li>
  );
};

export default AllPrac;
