import React from "react";
import "./App.css";

import UseState from "./Components/UseState";
import UseInput from "./Components/UseInput";
import UseTabs from "./Components/UseTabs";
import UseEffect from "./Components/UseEffect";
import UseTitle from "./Components/UseTitle";

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
      <hr />
      <UseTitle />
    </div>
  );
};

export default App;
