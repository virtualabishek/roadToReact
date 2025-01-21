import Form from "./components/Form";
import UseState from "./components/UseState";

const Lists = (props) => {
  return (
    <ul>
      {props.list.map((item) => (
        <li key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </li>
      ))}
    </ul>
  );
};

const App = () => {
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
  return (
    <>
      <div>{/* <Lists list={stories} /> */}</div>

      {/* Aru Topics Haru:  */}
      {/* <UseState /> */}
      <Form />
    </>
  );
};

export default App;
