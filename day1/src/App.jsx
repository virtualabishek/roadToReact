import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(42);
  const incrementMe = () => {
    setCounter(counter + 1);
  };
  const decrementMe = () => {
    setCounter(counter - 1);
  };
  // For Adding Books From User as a input
  const [books, setBooks] = useState([
    "The Road to JavaScript",
    "The Road to React",
  ]);
  const [text, setText] = useState("");
  const addBooksOnList = () => {
    setBooks(books.concat(text));
    setText("");
  };
  const Lists = ({ list }) => (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <>
      <p>Hello From Road Of React</p>
      <button onClick={incrementMe}>Increment</button>
      <button onClick={decrementMe}>Derement</button>
      <p>{counter}</p>
      <br />
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="button" onClick={addBooksOnList}>
        Add
      </button>
      <br />
      <br />
      <p>List of Books</p>
      <Lists list={books} />
    </>
  );
}
