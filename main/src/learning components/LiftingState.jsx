import { useState } from "react";
// import { use } from "react";

const LiftingState = () => {
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
  const [searchItem, setSearchTerm] = useState("");
  const handleClick = (event) => setSearchTerm(event.target.value);
  const searchedStories = stories.filter((story) => {
    return story.title.includes(searchItem);
  });
  return (
    <div>
      <h1 className="text-center text-2xl">Top Tech Stacks on 2025</h1>
      <br />
      <Search searchMe={handleClick} />
      <ListComponent listItems={searchedStories} />
    </div>
  );
};

const Search = (props) => {
  return (
    <>
      <label htmlFor="input">Search Tech Stack:</label>
      <input
        className="bg-gray-400 border-2 border-yellow-500 text-pink-950"
        type="text"
        onChange={props.searchMe}
        placeholder="Search Any Book"
      />
    </>
  );
};

const ListComponent = (props) => {
  return (
    <ol className="list-item list-disc">
      {props.listItems.map((item) => (
        <Items key={item.objectID} item={item} />
      ))}
    </ol>
  );
};

const Items = (props) => {
  return (
    <li className="list-item list-disc">
      <span className="cursor-pointer px-4">
        <a href={props.item.url}>{props.item.title}</a>,
      </span>
      <span className="text-green-600">{props.item.author},</span>
      <span className="text-blue-500">
        {" "}
        No. Of Comments: {props.item.num_comments},
      </span>
      <span className="text-yellow-400"> Points:{props.item.points}</span>
    </li>
  );
};

export default LiftingState;
