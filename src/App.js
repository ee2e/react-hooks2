import React, { useState } from "react";
import "./App.css";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
      <hr />
      {/* ...name : name 안에 있는 모든 것들을 보여줌 (여기서는 value={name}.value onChange={name.onChange}와 같다) */}
      <input placeholder="Name" {...name} />
    </div>
  );
};

// class AppUgly extends React.Component {
//   state = {
//     item: 1,
//   };
//   render() {
//     const { item } = this.state;
//     return (
//       <div className="App">
//         <h1>Hello {item}</h1>
//         <h2>Start editing to see some magic happen!</h2>
//         <button onClick={this.incrementItem}>Increment</button>
//         <button onClick={this.decrementItem}>Decrement</button>
//       </div>
//     );
//   }
//   incrementItem = () => {
//     this.setState((state) => {
//       return {
//         item: state.item + 1,
//       };
//     });
//   };
//   decrementItem = () => {
//     this.setState((state) => {
//       return {
//         item: state.item - 1,
//       };
//     });
//   };
// }

export default App;
