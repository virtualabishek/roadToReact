import AppMain from "./components/AppMain";
import AllPrac from "./learning components/AllPrac";
import LiftingState from "./learning components/LiftingState";

const App = () => {
  return (
    <div>
      {/* This AppMain contains all the orginal components and code from
     road to react.*/}
      <AppMain />
      {/* The following components are some extra for exploring. */}
      <br />
      <hr />
      {/* <LiftingState /> */}
      {/* <AllPrac /> */}
    </div>
  );
};

export default App;
