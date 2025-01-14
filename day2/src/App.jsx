import "./App.css";
import Basic from "./components/Basic";
import List from "./components/List";
import Search from "./components/Search";
import EventHandler from "./components/EventHandler";

function App() {
  return (
    <div>
      {/* This is JSX. HTML + JS, Write JS inside {} */}
      <Basic />

      <hr />
      <Search />

      {/* Lists In React */}
      <hr />
      <List />
      <Search />
      <br />
      <br />
      {/* Meet Another Components */}
      <EventHandler />
    </div>
  );
}

export default App;
