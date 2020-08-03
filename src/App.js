import React from "react";
import "./App.css";

import UseState from "./Components/UseState";
import UseInput from "./Components/UseInput";
import UseTabs from "./Components/UseTabs";
import UseEffect from "./Components/UseEffect";
import UseTitle from "./Components/UseTitle";
import UseClick from "./Components/UseClick";
import UseConfirm from "./Components/UseConfirm";
import UsePreventLeave from "./Components/UsePreventLeave";
import UseBeforeLeave from "./Components/UseBeforeLeave";

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
      <hr />
      <UseClick />
      <hr />
      <UseConfirm />
      <hr />
      <UsePreventLeave />
      <hr />
      <UseBeforeLeave />
    </div>
  );
};

export default App;
