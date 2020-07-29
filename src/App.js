import React from "react";
import "./App.css";

import UseState from "./Components/UseState";
import UseInput from "./Components/UseInput";
import UseTabs from "./Components/UseTabs";
import UseEffect from "./Components/UseEffect";

const App = () => {
  return (
    <div className="App">
      <UseState />
      <hr />
      <UseInput />
      <hr />
      <UseTabs />
      <hr />
      <UseEffect />
    </div>
  );
};

export default App;
