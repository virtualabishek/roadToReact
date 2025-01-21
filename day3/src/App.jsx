import Form from "./components/Form";
import JokesGenerator from "./components/JokesGenerator";
import Password from "./components/Password";
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
      <hr />
      <h3>PROJECT - I</h3>
      <hr />
      <Form />
      <hr />
      <h3>PROJECT - II</h3>
      <hr />
      <JokesGenerator />
      <hr />
      <h3>PROJECT - III</h3>
      <hr />
      <Password />
      <hr />
      <h3>PROJECT - IV</h3>
      <hr />
      <hr />
      <h3>PROJECT - V</h3>
      <hr />
      <hr />
      <h3>PROJECT - VI</h3>
      <hr />
    </>
  );
};

export default App;
