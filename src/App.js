import React from "react";
import "./App.css";

import UseState from "./Components/UseState";
import UseInput from "./Components/UseInput";
import UseTabs from "./Components/UseTabs";

const App = () => {
  return (
    <div className="App">
      <UseState />
      <hr />
      <UseInput />
      <hr />
      <UseTabs />
    </div>
  );
};

export default App;
